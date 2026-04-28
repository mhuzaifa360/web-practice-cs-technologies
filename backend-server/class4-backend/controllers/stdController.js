
import std from "../constant/student.js";
import student from "../models/studentModel.js";

export const createStudent = async(req,res)=>{
   const  clientData = req.body;
   try{
    const studentData = await student.create(clientData)

    res.json({
    message: "student successfully created",
    clientData : studentData
   })
   }catch(error){
    res.json({
        message: "internal server error",
        error : error.message
    })
   }

   
}

// for get product
export const getStd= (req,res)=>{
    res.json('get student successfully');
}
// for post product
export const createStd= (req,res)=>{
    res.json();
}
// for put product
export const updateStd= (req,res)=>{
    res.json();
}
// for delete product
export const deleteStd= (req,res)=>{
    res.json();
}
