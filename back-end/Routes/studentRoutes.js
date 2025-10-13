import express from "express";
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from "../authcontroller/authcontroller.js";

const router = express.Router();
router.post("/createStudent",createStudent);
router.get("/getallstudent",getAllStudents);
router.get("/student/:id",getStudentById);
router.put("/update/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);
export default router;
