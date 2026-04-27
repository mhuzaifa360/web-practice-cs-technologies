import express from "express"
import { getStd } from "../controllers/stdController";
const route = express.Router();

route.get('/getStd',getStd);

export default route;