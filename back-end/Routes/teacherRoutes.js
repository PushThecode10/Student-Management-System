import express from "express";
import { createTeacher, deleteTeacher, getAllTeacher, getTeacherById, updateTeacher } from "../authcontroller/authcontroller.js";

const router = express.Router();

router.post("/createTeacher",createTeacher);
router.get("/getallteacher",getAllTeacher);
router.get("/teacher/:id",getTeacherById);
router.put("/updateTeacher/:id",updateTeacher);
router.delete("/deleteTeacher/:id",deleteTeacher);

export default router;