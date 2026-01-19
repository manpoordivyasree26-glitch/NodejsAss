import express from "express";
import userRouter from "./routes/users.routes.js";
import todoRouter from "./routes/todos.routes.js";
const PORT=3000;
const app=express();
app.use(express.json());

app.use("/users",userRouter);
app.use("/todos",todoRouter);


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})