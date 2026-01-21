import { Router } from "express";
import { createTodo, getTodos, getTodoById, updateTodo, deleteTodo } from "../controllers/todos.controller.js";

const router = Router();

router.post("/add", createTodo);
router.get("/", getTodos);
router.get("/:todoId", getTodoById);
router.put("/update/:todoId", updateTodo);
router.delete("/delete/:todoId", deleteTodo);

export default router;
