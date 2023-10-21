import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

app.use(express.json());

type Note = {
  id: number;
  content: string;
};

type Data = {
  nextId: number;
  notes: Record<number, Note>;
};

async function readJSON(): Promise<string> {
  return await readFile('./data.json', 'utf8');
}

async function writeJSON(data: Data): Promise<void> {
  const file = JSON.stringify(data, null, 2);
  await writeFile('./data.json', file);
}

app.get('/api/notes', async (req, res) => {
  try {
    const file = await readJSON();
    const data = JSON.parse(file);
    res.json(Object.values(data.notes));
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const file = await readJSON();
    const data = JSON.parse(file);
    const { id } = req.params;

    if (+id <= 0 || !Number.isInteger(+id)) {
      return res
        .status(400)
        .json({ error: `${id} is not a positive integer.` });
    }

    if (!(+id in data.notes)) {
      return res.status(404).json({ error: `${id} does not exist in notes.` });
    }
    res.json(data.notes[+id]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const file = await readJSON();
    const data = JSON.parse(file);
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'content is a required field' });
    }

    const note: Note = { content, id: data.nextId };
    data.notes[data.nextId++] = note;
    await writeJSON(data);
    res.status(201).json(note);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const file = await readJSON();
    const data = JSON.parse(file);
    const { id } = req.params;

    if (+id <= 0 || !Number.isInteger(+id)) {
      return res
        .status(400)
        .json({ error: `${id} is not a positive integer.` });
    }

    if (!(+id in data.notes)) {
      return res.status(404).json({ error: `${id} does not exist in notes.` });
    }

    delete data.notes[+id];
    await writeJSON(data);
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const file = await readJSON();
    const data = JSON.parse(file);
    const { id } = req.params;
    const { content } = req.body;

    if (+id <= 0 || !Number.isInteger(+id)) {
      return res
        .status(400)
        .json({ error: `${id} is not a positive integer.` });
    }

    if (!content) {
      return res.status(400).json({ error: 'content is a required field' });
    }

    if (!(+id in data.notes)) {
      return res.status(404).json({ error: `${id} does not exist in notes.` });
    }

    data.notes[+id].content = content;
    await writeJSON(data);
    res.json(data.notes[id]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Listening to port 8080.');
});
