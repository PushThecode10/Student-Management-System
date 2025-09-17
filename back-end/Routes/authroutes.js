import express from "express"
import { createStudent, deleteStudent, getAllStudents, getStudentById, login, logout, register, resetPassword, sendResetOtp, updateStudent } from "../authcontroller/authcontroller.js";



const router = express.Router();

router.post("/register",register);
router.post("/login", login);
router.post("/logout",logout);
router.post("/send-reset-otp",sendResetOtp);
router.post("/reset-password",resetPassword);
router.post("/createStudent",createStudent);
router.post("/getallstudent",getAllStudents);
router.get("/student/:id",getStudentById);
router.put("/update/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);

export default router