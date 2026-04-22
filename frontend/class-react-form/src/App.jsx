import React, { useState } from "react";
import Form2 from "./Form";
import Basic from "./Form3"; 
// first name , last name , address, gender, age, roll no, subjects: select 10, 
export default function App() {
  return (
    <div>
      {/* <Form /> */}
      {/* <Form2 /> */}
      <Basic />
    </div>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [rollno, setRollNo] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    alert(`
        Name:    ${firstName} ${lastname}.
        Age:      ${age} 
        Gender:  ${gender}
        RollNo:  ${rollno}
        Address: ${address}
        Subject:  ${subject}
        `)
  }
  return (
    <div className="flex items-center justify-center  mt-10">

      {/* form */}
      <form className="w-1/2 bg-slate-300 rounded-md p-10 space-y-5 ">
      <h1 className="text-center text-3xl">Fill the form</h1>
        {/* first name */}
        <div className="flex justify-between">

        <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={firstName}
          placeholder="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          className="w-[400px] border rounded-lg p-2"
          />
          </div>
        {/* last name  */}
        <div className="flex justify-between">

        <label htmlFor="lastname">LastName</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          placeholder="lastname"
          onChange={(e) => setLastName(e.target.value)}
          className="w-[400px] border rounded-lg p-2"
        />
        </div>
        {/* roll no  */}
        <div className="flex justify-between">

        <label htmlFor="rollno">Roll No</label>
        <input
          type="number"
          id="rollno"
          name="rollno"
          value={rollno}
          placeholder="Roll No"
          onChange={(e) => setRollNo(e.target.value)}
          className="w-[400px] border rounded-lg p-2"
        />
          </div>
        {/* age */}
        <div className="flex justify-between">
        <label htmlFor="">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
          className="w-[400px] border rounded-lg p-2"
        />

        </div>
        {/* address */}
        <div className="flex justify-between">

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
          className="w-[400px] border rounded-lg p-2"
          />
          </div>

        {/* gender */}
        <div >
        <label htmlFor="gender">Gender:</label>
        {/* male */}
        <div>

        <input
          type="radio"
          id="male"
          name="gender"
          checked={gender === "male"}
          onClick={(e)=> setGender('male')}
          className=""
          />
        <label htmlFor="male">Male</label>
          </div>

        {/* female */}
        <div>

        <input
          type="radio"
          id="female"
          name="gender"
          checked={gender === 'female'}
          onClick={(e)=> setGender('female')}
          className=""
          />
        <label htmlFor="female">Female</label>
          </div>
          </div>

        {/* subjects */}
        <div className="">
          <label htmlFor="subject">Subjects:</label>
          <select name="subject" id="subject" className="w-[400px] border rounded-lg p-2 flex justify-center" onChange={(e)=>setSubject(e.target.value)}>
            <option value="maths">Computer Science</option>
            <option value="maths">Maths</option>
            <option value="chemistry">Chemistry</option>
            <option value="physics">Physics</option>
            <option value="urdu">Urdu</option>
            <option value="islamiat">Islamiat</option>
            <option value="database">Database</option>
            <option value="computer networks">Computer Networks</option>
            <option value="web development">Web development</option>
            <option value="app development">App Development</option>
          </select>
        </div>

        {/* submit button */}
        <button 
        onClick={handleSubmit}
        className="bg-slate-50 p-2 rounded-md hover:bg-slate-400"
        >Submit</button>
      </form>
    </div>
  );
}
