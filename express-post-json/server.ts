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
  const { name: newName, course: newCourse, score: newScore } = req.body;
  console.log(newName);

  if (!newName || !newCourse || !newScore) {
    return res
      .status(400)
      .send(
        'You have missing fields. Please follow the format of name, course, and score.'
      );
  }

  const newGrade: Grade = {
    id: nextId,
    name: newName,
    course: newCourse,
    score: newScore,
  };
  grades[nextId++] = newGrade;
  return res.status(201).json(newGrade);
});

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
