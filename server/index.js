import { connectDB } from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import userRoute from "./Routes/userRoutes.js";
import dotenv from 'dotenv';
import authUserRoute from "./Routes/authUserRoutes.js";


dotenv.config();
//middleware

const app=express();
const PORT=process.env.PORT||5000;

app.use(cors());
app.use(express.json())


connectDB()

app.use('/api/users',userRoute);
app.use('/api/auth',authUserRoute)

app.listen(PORT,()=>{
    console.log(`server runnin on port ${PORT}`);
})