import UserModel from "../Model/userModel.js";

export const createUsercontroller = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const response=await UserModel.createUser({name,email,password});
        res.status(201).json({
            message : "user created successfully",
            userId : response
        })
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}