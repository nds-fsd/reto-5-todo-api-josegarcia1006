const express = require('express');
const cors = require('cors');
const app = express();
const todoRouter = require('./routers/todo');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.use(todoRouter);

app.listen(3000, () => {
  console.log('Server is up and running in port 3000');
});
