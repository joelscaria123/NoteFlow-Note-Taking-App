import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

 export const connectDB = async () => {

     try{
       await mongoose.connect(MONGODB_URI);
       console.log("MongoDB Connected Successfully");
     }
     catch(error){
       console.log("Error in connecting to the Database", error.message);
       process.exit(1);
     }
}