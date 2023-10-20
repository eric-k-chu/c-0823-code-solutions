import express from 'express';

const app = express();

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  if (!(req.params.id in grades)) {
    return res.send(`${req.params.id} not found in grades.`).status(404);
  }
  delete grades[req.params.id];
  return res.send(`${req.params.id} successfully deleted.`).status(204);
});

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
