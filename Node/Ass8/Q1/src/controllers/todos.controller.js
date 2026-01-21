import { readTodos, writeTodos } from "../models/todos.model.js";

// CREATE TODO
export const createTodo = (req, res) => {
  try {
    const db = readTodos();
    const newTodo = req.body;

    newTodo.id = Date.now().toString();
    newTodo.completed = false;

    db.todos.push(newTodo);
    writeTodos(db);

    res.status(201).json({ message: "Todo added", todo: newTodo });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET ALL TODOS
export const getTodos = (req, res) => {
  try {
    const db = readTodos();
    res.status(200).json(db.todos);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET SINGLE TODO
export const getTodoById = (req, res) => {
  try {
    const db = readTodos();
    const todo = db.todos.find(t => t.id === req.params.todoId);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// UPDATE TODO
export const updateTodo = (req, res) => {
  try {
    const db = readTodos();
    const todoId = req.params.todoId;

    const todoIndex = db.todos.findIndex(t => t.id === todoId);

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    db.todos[todoIndex] = { ...db.todos[todoIndex], ...req.body };
    writeTodos(db);

    res.status(200).json({ message: "Todo updated" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE TODO
export const deleteTodo = (req, res) => {
  try {
    const db = readTodos();
    const todoId = req.params.todoId;

    const newTodos = db.todos.filter(t => t.id !== todoId);

    if (newTodos.length === db.todos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    db.todos = newTodos;
    writeTodos(db);

    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
