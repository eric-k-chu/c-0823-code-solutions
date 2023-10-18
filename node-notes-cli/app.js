import { readFile, writeFile } from 'node:fs/promises';

const [, , operation, arg1, arg2] = process.argv;

async function readJSON() {
  if (
    operation !== 'create' &&
    operation !== 'read' &&
    operation !== 'update' &&
    operation !== 'delete'
  ) {
    throw new Error('Invalid operation');
  }

  const dataStr = await readFile('./data.json', 'utf8');
  const data = JSON.parse(dataStr);

  switch (operation) {
    case 'create': {
      const note = arg1;
      data.notes[data.nextId] = note;
      data.nextId++;
      break;
    }
    case 'read': {
      for (const id in data.notes) {
        console.log(`${id}: ${data.notes[id]}`);
      }
      break;
    }
    case 'update': {
      const id = arg1;
      const note = arg2;
      if (!data.notes[id]) {
        throw new Error(`${id} does not exist in your notes.`);
      }
      data.notes[id] = note;
      break;
    }
    case 'delete': {
      const id = arg1;
      if (!data.notes[id]) {
        throw new Error(`${id} does not exist in your notes.`);
      }
      delete data.notes[id];
      break;
    }
  }
  const newDataStr = JSON.stringify(data, null, 2);
  await writeFile('./data.json', newDataStr);
}

try {
  await readJSON();
} catch (err) {
  console.error(err);
  process.exit(1);
}
