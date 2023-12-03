const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const todoRouter = require('./routers/todo');


mongoose.connect('mongodb://localhost:27017/todoAppDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error al conectar a MongoDB: ${err.message}`);
});

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.use(todoRouter);


process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Conexión a MongoDB cerrada debido a la terminación de la aplicación');
    process.exit(0);
  });
});

app.listen(3000, () => {
  console.log('Server is up and running on port 3000');
});
