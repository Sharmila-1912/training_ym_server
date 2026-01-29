import { createUserController,getAllUsersController,updateUserPassword,deleteUserController } from '../Controller/userController.js';

import express from 'express'

const userRoute=express.Router();

userRoute.post('/signup',createUserController);
userRoute.get('/getusers',getAllUsersController);
userRoute.put('/updatepass/:id',updateUserPassword);
userRoute.delete('/deleteuser/:id',deleteUserController);

export default userRoute