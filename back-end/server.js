import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/Mongobd.js";
import authroutes from "./Routes/authroutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
const apiOrigin = ['http://localhost:5173']
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: apiOrigin, // allow only this origin
  credentials: true,              // allow cookies / sessions
}));

app.use("/api/auth", authroutes);
app.get("/", (req, res) => {
  return res.json("my profile");
});

app.listen(port, () => console.log(`surver run successfully ${port}`));
