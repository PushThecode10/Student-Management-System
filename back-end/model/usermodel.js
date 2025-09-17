import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  resetOtp: { type: String },
  resetOtpExpire: { type: String },
});
// Check if the 'user' model already exists in the Mongoose model registry
// If it exists, use it; otherwise, create a new model using the userSchema
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
