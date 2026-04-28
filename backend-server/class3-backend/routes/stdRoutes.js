import express from "express"
import { getStd } from "../controllers/stdController.js";
const route = express.Router();

route.get('/getStd',getStd);

export default route;