import express from "express";
import usersRouter from "./routes/users.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app=express();
app.use(express.json())

app.use("/users",usersRouter)

app.listen(3000,()=>{
    console.log("server is running on 3000")
})