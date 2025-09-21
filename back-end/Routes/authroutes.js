import express from "express"
import { createCourse, createStudent, createTeacher, deleteCourse, deleteStudent, deleteTeacher, getAllCourses, getAllStudents, getAllTeacher, getCourseById, getStudentById, getTeacherById, login, logout, register, resetPassword, sendResetOtp, updateCourse, updateStudent, updateTeacher } from "../authcontroller/authcontroller.js";



const router = express.Router();

router.post("/register",register);
router.post("/login", login);
router.post("/logout",logout);
router.post("/send-reset-otp",sendResetOtp);
router.post("/reset-password",resetPassword);
router.post("/createStudent",createStudent);
router.get("/getallstudent",getAllStudents);
router.get("/student/:id",getStudentById);
router.put("/update/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);
router.post("/createTeacher",createTeacher);
router.post("/getallteacher",getAllTeacher);
router.get("/teacher/:id",getTeacherById);
router.put("/updateTeacher/:id",updateTeacher);
router.delete("/deleteTeacher/:id",deleteTeacher);
router.post("/createCourse",createCourse);
router.get("/getallcourse",getAllCourses);
router.get("/Course/:id",getCourseById);
router.put("/updateCourse/:id",updateCourse);
router.delete("/deleteCourse/:id",deleteCourse);

export default router