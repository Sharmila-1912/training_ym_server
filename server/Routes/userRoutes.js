import { createUsercontroller } from "../Controller/userController.js";

import express from 'express'

const userRoute=express.Router();

userRoute.post('/signup',createUsercontroller);

export default userRoute