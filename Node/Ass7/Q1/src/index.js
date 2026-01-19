
import express from "express";
import loggerMiddleWare from "./middleware/logger.middleware.js";
import todoRouter from "./routes/todos.routes.js";

const app=express();
app.use(express.json())
app.use(loggerMiddleWare)
app.use("/todos",todoRouter)

app.listen(3000,()=>{
    console.log("server is runnimg on http://localhost:3000")
})