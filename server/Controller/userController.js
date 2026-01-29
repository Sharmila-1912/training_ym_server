import UserModel from "../Model/userModel.js";

export const createUserController=async (req,res) => {
    try{
     const {name,email,password} = req.body
     const response=await UserModel.createUser(req.body);
     res.status(201).json({
        message: "user has been created",
        userId: response
     })
    }
     catch(err){
        res.status(500).json({error: err.message})
    }
}
//get all  the users
export const getAllUsersController = async (req,res) => {
    try{
            const data = await UserModel.getAllUsersModel();
            res.json(data)
        }
    catch(err){
        res.status(500).json({error: err.message})
    }
}
export const updateUserPassword =async (req,res)=>{
    try{
        const {password}=req.body;
        const updatePassword=await UserModel.updateUserPasswordModel(req.params.id,{password});
        if(!updatePassword){
            res.json({
                message:"user not found"
            })
        }
        else{
            res.json({
                message:"password has been updated"
            })
        }
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

export const deleteUserController=async(req,res)=> {
     try{
        const delte=await UserModel.deleteUserModel(req.params.id);
        if(!delte){
            res.json({
                message:"user not found"
            })
        }
        else{
            res.json({
                message:"user has been removed"
            })
        }
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

