let count=0;
let start=Date.now();

const rateLimiter=(req,res,next)=>{
const now=Date.now();


if(now-start>=60000){
    start=now;
    count=0;
}
count++;

if(count>15){
    return res.status(429).json({error:"To many requests,please try again later"});
}
next();

};
export default rateLimiter;