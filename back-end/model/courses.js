import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
     Title:{
        type:String,
        required: true,
        trim: true,
     },
     Discription:{
        type: String,
        default: null,
     },
     Duration:{
        type: Number,
        required: true,
     },
     Basefee:{
        type: Number,
        required: true,
     },
     Status:{
        type: String,
        enum: ['active', 'inactive', '', null],
        default: null,
     },
})
const Course = mongoose.model('Course', courseSchema);
export default Course;