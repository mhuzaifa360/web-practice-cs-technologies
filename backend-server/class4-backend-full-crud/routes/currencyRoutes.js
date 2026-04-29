import express from "express"
import { createCurrency, deleteCurrency, getCurrency, getSingleCurrency, updateCurrency } from "../controllers/currencyController";
const route = express.Router();


route.post("/createCurrency", createCurrency)
route.get("/getCurrency", getCurrency)
route.delete("/deleteCurrency/:id", deleteCurrency)
route.get("/getSingleCurrency/:id", getSingleCurrency)
route.put("/updateCurrency/:id", updateCurrency)

export default route;