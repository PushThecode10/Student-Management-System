import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        trim: true,
    },
    last_name:{
        type: String,
        default: null,
        trim: true,
    },
    gender:{
        type: String,
        enum: ["male","female","other","",null],
        default: null,
    },
    phone:{
        type: String,
        required: true,
        trim: true,
    },
      email: {
    type: String,
    default: null,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    default: null,
  },
  shift:{
    type: String,
    default: null,
  }
})

const Teacher = mongoose.model("teacher", teacherSchema);

export default Teacher;