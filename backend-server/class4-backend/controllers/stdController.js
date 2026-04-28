
// import std from "../constant/student.js";
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
export const getStudent= async(req,res)=>{
    try {
        const allStudents = await student.findAll();
        res.json({
            success: true,
            message: "Retrieve all students successfully",
            data: allStudents
        })
    } catch (error) {
        res.json({
            success: false,
            message: "network error",
            error: error.message
        })
    }
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
