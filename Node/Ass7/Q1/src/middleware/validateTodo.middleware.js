const validateTodo=(req,res,next)=>{
const body=req.body;

if(!body.title){
    return res.status(400).json({error: "Title is requried"})
}
if(typeof body !== "string"){
    return res.status(400).json({error:"This is must be a string"})

}
const keys=object.keys(body);
if(keys.length>1){
    return res.status(404).json({error:"Only 'title' field is allowed"})
}
next();
}
export default validateTodo;