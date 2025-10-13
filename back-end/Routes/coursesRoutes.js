import express from "express";
import { createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from "../authcontroller/authcontroller.js";

const router = express.Router();

router.post("/createCourse",createCourse);
router.get("/getallcourse",getAllCourses);
router.get("/Course/:id",getCourseById);
router.put("/updateCourse/:id",updateCourse);
router.delete("/deleteCourse/:id",deleteCourse);
export default router;