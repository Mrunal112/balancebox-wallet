import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        const connectionString = await mongoose.connect(process.env.MONGO_URL!)
        console.log(`Connected to ${connectionString.connection.host}`)
    }catch(error){
        console.error(`Error : ${error}`)
    }
}

export const disconnectDB = async() =>{
    await mongoose.disconnect();
}