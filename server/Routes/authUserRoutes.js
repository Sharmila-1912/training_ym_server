import express from 'express'
import {protect} from '../middleware/protect.js'
import {isAdmin} from '../middleware/admin.js'
import{authSignUp,authLogin} from '../Controller/authUserController.js'

const authUserRoute=express.Router()
authUserRoute.post('/authsign',authSignUp)
authUserRoute.post('/authlogin',authLogin)
authUserRoute.post('/profile',protect,(req,res)=>{
    res.json({message:"Protected file",user:req.role})
})

authUserRoute.get('/admin',protect,isAdmin,(req,res)=>{
    res.json({
        message:"Welcome admin",
        user:req.role
    })
})

export default authUserRoute