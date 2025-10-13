import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/Mongobd.js";
import authroutes from "./Routes/authroutes.js";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// CORS configuration, using environment variable if available
const apiOrigin = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : ['http://localhost:5173'];

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: apiOrigin,  // Allow only this origin (from environment variable or default)
  credentials: true,  // Allow cookies/sessions
}));

// Morgan logging middleware (for development)
app.use(morgan('dev'));

// Routes
app.use("/api/auth", authroutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

// Server start
app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
});

