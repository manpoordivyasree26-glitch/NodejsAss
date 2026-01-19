import {Router} from "express";
import fs from "fs";

const router=Router();
const DB_PATH = "./src/db.json";

const readDB=()=>JSON.parse(fs.readFileSync(DB_PATH,"utf-8"));
const writeDB=(data)=>fs.writeFileSync(DB_PATH, JSON.stringify(data,null,2))

//create todo
router.post("/add",(req,res)=>{
    const db=readDB();
    const newTodo=req.body;

    newTodo.id=Date.now().toString();
    newTodo.completed=false;

    db.todos.push(newTodo);
    writeDB(db);

    res.status(201).json({message:"todo added",todo:newTodo})
})
//get all todos
router.get("/",(req,res)=>{
    const db=readDB();
    res.json(db.todos)
})
//single todo
router.get("/:todoId",(req,res)=>{
    const db=readDB();
    const todo=db.todos.find(t=>t.id === req.params.todoId)
    if(!todo){
        return res.status(404).json({message:"todo not found"})
    }
    res.json(todo);
})
//update todo
router.put("/update/:todoId",(req,res)=>{
    const db=readDB();
    const todoId=req.params.todoId;

    const todoIndex=db.todos.findIndex(t=>t.id === todoId);
    if(todoIndex === -1){
        return res.status(404).json({message:"Todo not found"});
    }
    db.todos[todoIndex]={...db.todos[todoIndex],...req.body};
    writeDB(db);
    res.json({message:"todo updated"})
})
router.delete("/delete/:todoId",(req,res)=>{
    const db=readDB();
    const todoId=req.params.todoId;
    const newTodos=db.todos.filter(t=>t.id!==todoId);

    if(newTodos.length ===db.todos.length){
     return res.status(404).json({message:"todo not found"});
    }
db.todos=newTodos;
writeDB(db);
res.json({message:"Todo deleted"})
})
export default router;