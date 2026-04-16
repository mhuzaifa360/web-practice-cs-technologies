import React, { useState } from "react";

export default function Form2() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    rollno: "",
    address: "",
    gender: "",
    age: "",
    subject: "",
    hobbies: [],
  });

  // hobbies list
  const hobbiesList = ["Cricket", "Football", "Reading", "Gaming"];

  // handle all inputs
  const handleEventInputField = (e) => {
    const { name, value, checked } = e.target;

    setFormData({
      ...formData,
      hobbies: updatedHobbies,
    });
  };
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({ ...formData, hobbies: [...formData.hobbies, value] });
    } else {
      setFormData({
        ...formData,
        hobbies: [...formData.hobbies.filter((item) => item !== value)],
      });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    alert(`
      firstName: ${formData.firstname}
      lastName: ${formData.lastname}
      rollNo: ${formData.rollno}
      age: ${formData.age}
      gender: ${formData.gender}
      subject: ${formData.subject}
      address: ${formData.address}
    `);
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 bg-slate-300 rounded-md p-10 space-y-5"
      >
        <h1 className="text-center text-3xl">Fill the form</h1>

        {/* first name */}
        <div className="flex justify-between">
          <label>FirstName</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleEventInputField}
            className="w-[400px] border rounded-lg p-2"
          />
        </div>

        {/* last name */}
        <div className="flex justify-between">
          <label>LastName</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleEventInputField}
            className="w-[400px] border rounded-lg p-2"
          />
        </div>

        {/* roll no */}
        <div className="flex justify-between">
          <label>Roll No</label>
          <input
            type="number"
            name="rollno"
            value={formData.rollno}
            onChange={handleEventInputField}
            className="w-[400px] border rounded-lg p-2"
          />
        </div>

        {/* address */}
        <div className="flex justify-between">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleEventInputField}
            className="w-[400px] border rounded-lg p-2"
          />
        </div>

        {/* gender */}
        <div>
          <label>Gender:</label>

          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleEventInputField}
            />
            <label>Male</label>
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleEventInputField}
            />
            <label>Female</label>
          </div>
        </div>

        {/* hobbies (NEW) */}
        <div>
          {hobbiesList.map((item, index) => {
            return (
              <div key={index}>
                <label htmlFor="">
                  {item}
                  <input
                    type="checkbox"
                    name="hobbies"
                    value={item}
                    onChange={handleCheckbox}
                  />
                </label>
              </div>
            );
          })}
        </div>

        {/* submit */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
