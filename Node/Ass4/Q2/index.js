const express=require("express")
const os=require("os");
const dns=require("dns");
const readFileData=require("./read");

const app=express();
const PORT=3000;
//test route
app.get("/test",(req,res)=>{
    res.send("Test route is working")
})
//Read File
app.get("/readFile",(req,res)=>{
    const fileContent=readFileData()
    res.send(fileContent);
})
//system Details
app.get("/systemdetails",(req,res)=>{
    const details={
platform:os.platform(),
totalMemory:`${(os.totalmem()/(1024**3)).toFixed(2)}GB`,
freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length,
    }
    res.json(details);
})
//GetIP using DNS
app.get("/getip",(req,res)=>{
    dns.lookup("masaischool.com",(err,address)=>{
        if(err){
            res.json({error:"unable to fetch IP"});
            return;
        }
        res.json({
            hostname:"masaischool.com",
            ipAddress:address,
        })
    })
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})