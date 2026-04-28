import express from "express"
import { createStudent, getStd } from "../controllers/stdController.js";
const route = express.Router();

route.get('/getStd',getStd);
route.post("/createStudent", createStudent)
export default route;