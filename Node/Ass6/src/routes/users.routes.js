import {Router} from "express";
import fs from "fs";

const router=Router();
const DB_PATH="./src/db.json";
const readDB=()=>JSON.parse(fs.readFileSync(DB_PATH,"utf-8"));
const writeDB=(data)=>fs.writeFileSync(DB_PATH,JSON.stringify(data,null,2))


router.post("/add",(req,res)=>{
    const db=readDB();
    const newUser=req.body;
    newUser.id= Date.now().toString();
    db.users.push(newUser);
    writeDB(db);
    res.status(201).json({message:"user Added",user:newUser})
});
router.get("/",(req,res)=>{
    const db=readDB();
    res.json(db.users);
})
router.get("/:userId",(req,res)=>{
    const db=readDB();
    const user=db.users.find(u=>u.id===req.params.userId);
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    res.json(user);
})
router.put("/update/:userId",(req,res)=>{
    const db=readDB();
    const userId=req.params.userId;
    const userIndex=db.users.findIndex(u=>u.id===userId)
    if(userIndex===-1){
        return res.status(404).json({message:"user not found"})
    }
    db.users[userIndex]={...db.users[userIndex],...req.body};
    writeDB(db);
    res.json({message:" user updated"})
})

router.delete("/delete/:userId",(req,res)=>{
    const db=readDB();
    const userId=req.params.userId;
    const newUsers=db.Users.filter(u=>u.id!==userId);

    if(newUsers.length === db.users.length){
        return res.status(404).json({message:"User not found"});
    }
    db.users=newUsers;
    writeDB(db);

    res.json({message:"user Deleted"});
})
export default router;