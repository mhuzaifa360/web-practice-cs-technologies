// import std from "../constant/student.js";
import student from "../models/studentModel.js";

// for create student
export const createStudent = async (req, res) => {
  const clientData = req.body;
  try {
    const studentData = await student.create(clientData);

    res.json({
      message: "student successfully created",
      clientData: studentData,
    });
  } catch (error) {
    res.json({
      message: "internal server error",
      error: error.message,
    });
  }
};

// for get product
export const getStudent = async (req, res) => {
  try {
    const allStudents = await student.findAll();
    res.status(200).json({
      success: true,
      message: "Retrieve all students successfully",
      data: allStudents,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// for delete student
export const deleteStudent = async (req, res) => {
  try {
    const studentID = req.params.id;
    // student is table name
    const existStudent = await student.findOne({ where: { id: studentID } });
    console.log("exist student", existStudent);

    // IF STUDENT ID NOT FOUND
    if (!existStudent) {
      res.status(404).json({
        success: false,
        message: `user not found with this id ${existStudent}`,
      });
    }
    // DELETE STUDENT WITH MATCHING ID
    await existStudent.destroy();

    // IF DELETE THAN SHOW A MESSAGE AND DELETED STUDENT
    res.json({
      success: true,
      message: `student deleted successfully with this ${studentID} id `,
      data: existStudent,
    });

    // IF ERROR THAN SHOW THE ERROR
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// GET SINGLE USER
export const getSingleStudent = async (req, res) => {
  try {
    const studentID = req.params.id;
    // student is table name
    const existStudent = await student.findByPk(studentID);

    // IF STUDENT ID NOT FOUND
    if (!existStudent) {
      res.status(404).json({
        success: false,
        message: `user not found with this id ${existStudent}`,
      });
    }

    // IF DELETE THAN SHOW A MESSAGE AND DELETED STUDENT
    res.json({
      success: true,
      message: `get single student successfully with this ${studentID} id `,
      data: existStudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// UPDATE STUDENT
export const updateStudent = async (req, res) => {
  try {
    const studentID = req.params.id;
    const updatedStudent = req.body;

    // student is table name
    const existStudent = await student.findByPk(studentID);

    // IF STUDENT ID NOT FOUND
    if (!existStudent) {
      res.status(404).json({
        success: false,
        message: `user not found with this id ${existStudent}`,
      });
    }
    const studentData = await existStudent.update(updatedStudent)

    // IF DELETE THAN SHOW A MESSAGE AND DELETED STUDENT
    res.json({
      success: true,
      message: `student updated successfully `,
      data: studentData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};
