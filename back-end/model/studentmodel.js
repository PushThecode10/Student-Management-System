import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    default: null,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other", "", null], // 💡 updated
    default: null,
  },
  phone: {
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
  course: {
    type: String,
    default: null,
  },
  payment_status: {
    type: String,
    enum: ["Paid", "Pending", "Overdue", "Partial", "", null], // optional
    default: null,
  },
});


const Student = mongoose.model("Student", studentSchema);

export default Student;
