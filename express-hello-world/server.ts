import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
