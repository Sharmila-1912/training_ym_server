import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const protect =async(req,resizeBy,next)=>{
    const authHeader =req.header.authorization
    if(!authHeader || authHeader.startWith("Bearer")){
        return res.status(401).json({message:"unAutherized"})
    }
    const token=authHeader.split(" ")[1];
    try{
           const decode =jwt.verify(token,process.env.JWT_TOKEN)
           req.user=decode;
           next()
    }catch(err){
        res.status(401).json({message: "Invalid token"})
    }
}