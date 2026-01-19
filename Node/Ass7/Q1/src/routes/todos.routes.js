import {Router} from "express";
import fs from "fs";
import rateLimiter from "../middleware/rateLimiter.middleware.js";
import validateTodo from "../middleware/validateTodo.middleware.js";

const router = Router()
const DB_PATH="./src/db.json";

const readDB=()=>JSON.parse(fs.readFileSync(DB_PATH));
const writeDB=(data)=>fs.writeFileSync(DB_PATH,JSON.stringify(data,null,2))

//create Todo
router.post("/add",validateTodo,(req,res)=>{
    const todos=readDB();
    const newTodo={
    id: Date.now().toString(),
    title: req.body.title
    };
    todos.push(newTodo);
    writeDB(todos);
    return res.status(201).json(newTodo);
})
//all todos
router.get("/",rateLimiter,(req,res)=>{
    const todos=readDB();
    res.json(todos);
});
//single todo
router.get("/:todoId",(req,res)=>{
    const {todoId}=req.params;
    const todos=readDB();
    const todo=todos.find((t)=>t.id === todoId);
     if(!todo) return res.status(404).json({error:"todo not found"});
     res.json(todo);
});

//update todos
router.put("/update/:todoId",(req,res)=>{
    const {todoId}=req.params;
    const {title}=req.body;

    const todos=readDB();
    const todo=todos.find((t)=>t.id === todoId);
   if (!todo) return res.status(404).json({ error: "Todo not found" });
   
todo.title =title || todo.title;
writeDB(todos);
res.json({message:"Todo updated",todo})

})

router.delete("/delete/:todoId",(req,res)=>{
    const { todoId} =req.params;
    let todos=readDB();
    const exists=todos.some((t)=>t.id === todoId)
    if(!exists)
        return res.status(404).json({error:"todo not found"});
     todos=todos.filter((t)=>t.id !== todoId)
     writeDB(todos);
     res.json({message:"todo deleted"})
})
export default router;