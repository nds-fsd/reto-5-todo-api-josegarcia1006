const express = require('express');
const Todo = require('../models/Todo');
const todoRouter = express.Router();

// Obtener todos los toDo
todoRouter.get('/todo', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Crear un nuevo todo
todoRouter.post('/todo', async (req, res) => {
  try {
    const { text, fecha, done } = req.body;
    const newTodo = new Todo({
      text,
      fecha,
      done,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener un todo específico
todoRouter.get('/todo/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Actualizar un todo
todoRouter.patch('/todo/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Eliminar un todo
todoRouter.delete('/todo/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar el todo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = todoRouter;
