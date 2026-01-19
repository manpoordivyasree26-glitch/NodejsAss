const loggerMiddleware=(req,res,next)=>{
 const timestamp = new Data().toISOstring().replace("T"," ").split(".")[0];
 console.log(`[${timestamp}] ${req.method} ${req.url}`)
 next();
}
export default loggerMiddleware;