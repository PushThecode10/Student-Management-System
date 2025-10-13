// routes/mainRoutes.js
import express from 'express';

import studentRoutes from './studentRoutes.js';
import teacherRoutes from './teacherRoutes.js';
import courseRoutes from './coursesRoutes.js';
import { login, logout, register, resetPassword, sendResetOtp } from '../authcontroller/authcontroller.js';
import { authenticationToken } from '../Middleware/Auth.js';


const router = express.Router();

// Auth routes
router.post("/register", register);
router.post("/login",  login);
router.post("/logout", logout);
router.post("/send-reset-otp", sendResetOtp);
router.post("/reset-password", resetPassword);

// Use imported routes
// Add the authentication middleware to protect the routes
router.use('/students',authenticationToken, studentRoutes);
router.use('/teachers',authenticationToken, teacherRoutes);
router.use('/courses',authenticationToken, courseRoutes);

export default router;
