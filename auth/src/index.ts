import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
    if (! process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }
    try{
        mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb://auth-mogo-srv:27017/auth')
        console.log('Connected to mogodb');
    }
    catch(err){
        console.error(err);
    }
    
    app.listen(3000,() =>{
        console.log('Listening on port 3000');
    })
}

start()