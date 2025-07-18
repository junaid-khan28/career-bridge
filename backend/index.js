import cors from "cors";
import express from "express";


// import database : 
import connectDB from "./config/db";

const app = express();
app.use(cors());

connectDB();

