import express from "express"
import { createStudent, deleteStudent, getSingleStudent, getStudent, updateStudent } from "../controllers/stdController.js";
const route = express.Router();

// route.get('/getStd',getStd);
route.post("/createStudent", createStudent)
route.get("/getStudent", getStudent)
route.delete("/deleteStudent/:id", deleteStudent)
route.get("/getSingleStudent/:id", getSingleStudent)
route.put("/updateStudent/:id", updateStudent)
export default route;