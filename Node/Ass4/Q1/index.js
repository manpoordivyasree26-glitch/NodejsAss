const express=require('express');

const app=express();
const PORT=3000;

app.get('/home',(req,res)=>{
    res.send("This is home page");
})
app.get('/contactus',(req,res)=>{
    res.send("contact us at contact@contact.com");
})
app.get('/about',(req,res)=>{
    res.send("welcome to About page!")
})
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})