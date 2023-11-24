const express = require('express');


const { todos } = require('../data/index');

const todoRouter = express.Router();


todoRouter.get('/todo', (req, res) => {

  res.status(200).json(todos);
});


todoRouter.post('/todo', (req, res) => {

  const { text, fecha, done } = req.body;

  const newTodo = {
    id: todos.length,
    text,
    fecha,
    done,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

todoRouter.get('/todo/:id', (req, res) => {
  const todoId = parseInt(req.params.id);

  const todoFound = todos.find((todo) => todo.id === todoId);

  if (!todoFound) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.status(200).json(todoFound);
});

todoRouter.patch('/todo/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const { text, fecha, done } = req.body;

  const todoToUpdate = todos.find((todo) => todo.id === todoId);

  if (!todoToUpdate) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  todoToUpdate.text = text || todoToUpdate.text;
  todoToUpdate.fecha = fecha || todoToUpdate.fecha;
  todoToUpdate.done = done || todoToUpdate.done;

  res.status(200).json(todoToUpdate);
});

todoRouter.delete('/todo/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  todos.splice(todoIndex, 1);

  res.status(204).send();
});

module.exports = todoRouter;
