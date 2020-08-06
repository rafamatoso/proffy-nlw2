import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const users = [
    { name: 'Rafael', age: 31 },
    { name: 'Ray', age: 20 },
  ];

  return res.json(users);
});

app.listen(3333);
