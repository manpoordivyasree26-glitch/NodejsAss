import express from "express";
import fs from "fs";

const app=express();
app.use(express.json());
const DB_PATH="./db.json";

const readData=()=>JSON.parse(fs.readFileSync(DB_PATH,"utf-8"));
const writeData=(data)=>fs.writeFileSync(DB_PATH,JSON.stringify(data,null,2));

//read
app.get("/students",(req,res)=>{
    const students=readData();
    res.json(students);
})
//create
app.post("/students",(req,res)=>{
    const students=readData();
    const newStudent={id:Date.now(),...req.body};
    students.push(newStudent);
    writeData(students);
    res.status(201).json(newStudent);
})
//update
app.put("/students/:id",(req,res)=>{
const {id}=req.params;
const students=readData();
const index=students.findIndex(s=>s.id == id);

if(index === -1){
    return res.status(404).json({message:"Student not found"});
}
students[index]={...students[index],...req.body};
writeData(students);
res.json(students[index]);
})
//delete
app.delete("/students/:id",(req,res)=>{
    const {id}=req.params;
   const students=readData();
   const index=students.findIndex(s=>s.id===id)

   if(index=== -1){
    return res.status(404).json({message:"Student not found"});
   }
   const deletedStudent=students.splice(index,1);
   writeData(students);
   res.json(deletedStudent);

});

app.listen(3000,()=> console.log("Server running on port 3000"));