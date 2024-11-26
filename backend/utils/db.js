
import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('database connection established successfully...')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB