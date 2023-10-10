const jwt=require("jsonwebtoken")
function verifyToken(req,res,next){

    const token=req.headers.authorization;
    if(!token)
    return res.status(403).json({message:`token not found`})


    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
    if(err){

    return res.status(403).json({massage:`Failed to authenticate token`})}
    req.user=decoded;
console.log(req.user)
    next();
})

}
module.exports=verifyToken













