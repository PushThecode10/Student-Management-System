import mongoose from "mongoose"

const connectDB = async() =>{
  mongoose.connection.on('connected',()=>console.log("mongobd connected successfully"));
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.error("mongodb connection error:",error.messsage);
  }
};

export default connectDB;