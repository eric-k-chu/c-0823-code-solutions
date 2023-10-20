import express from 'express';

const app = express();

app.use(express.json());

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

let nextId = 1;

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

app.post('/api/grades', (req, res) => {
  const newGrade: Grade = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score,
  };
  grades[nextId++] = newGrade;
  res.json(newGrade).status(201);
});

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
