import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./middlewares/AuthMiddleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL; // Fixing the database URL

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);



// Fixing the port variable in the console.log statement
const server = app.listen(port, () => {
  console.log(`shrey is running on port ${port}`);
});

mongoose
  .connect(databaseURL)
  .then(() => {
    console.log(`DB connected successfully.`);
  })
  .catch((e) => console.log(e.message));
