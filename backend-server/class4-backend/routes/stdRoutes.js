import express from "express"
import { createStudent, getStudent } from "../controllers/stdController.js";
const route = express.Router();

// route.get('/getStd',getStd);
route.post("/createStudent", createStudent)
route.get("/getStudent", getStudent)
export default route;