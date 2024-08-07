import express, { Request, Response } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import profileRoutes from "./routes/profiles";
import workoutRoutes from "./routes/workouts";
import cookieParser from "cookie-parser";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", async (req: Request, res: Response) =>{
  res.send({ message: "health Ok!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/workouts", workoutRoutes);

app.listen(7000, () => {
  console.log("server running on localhost:7000");
});