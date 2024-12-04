import React, { useState } from "react";
import Button from "../Button/Button";
// import axios from "axios";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
export default function Register() {
  const [firstname, setFirstame] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // alert(`${firstname} ${lastname} ${email},${password}`);
    axios
      .post("http://localhost:9090/register", {
        firstname,
        lastname,
        email,
        password,
      })
      .then((res) => {
        alert(`${res.data.message}`);
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error.message}`);
      });
  };
  return (
    <div className="   h-5/6 my-6 py-5  flex justify-center w-full align-middle " style={{marginTop:90}} >
        <div className="w-80 bg-gray-600 rounded-lg ">
      <h2 className="p-1 m-5 my-5 rounded-2xl text-white bg-slate-600 font-bold text-2xl ">User Register</h2>
      <div className="">
        <div>
          <label className="text-white font-bold">Name</label>
          <input  className="p-2 my-5 m-2 rounded-2xl bg-white border-2 placeholder:text-blue-500 border-black"
            type="text"
            placeholder="Enter Name"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstame(e.target.value)}
            // className="p-2 m-5 rounded-2xl bg-slate-600"
          ></input>
        </div>
        {/* <div>
          <label>Lastname</label>
          <input
            type="text"
            placeholder="Enter Lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="p-2 m-5 rounded-2xl bg-slate-600"
          ></input>
        </div> */}
        <div>
          <label className="text-white font-bold">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             className="p-2 my-5 m-2 rounded-2xl bg-white border-2 placeholder:text-blue-500 border-black"
            // className="p-2 rounded-2xl bg-slate-600"
          ></input>
        </div>
        <div>
          <label className="text-white font-bold"holder="Enter Password"
            name="password">Password</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // className="p-2 m-5 rounded-2xl bg-slate-600"
             className="p-2 my-5 m-2 rounded-2xl bg-white border-2 placeholder:text-blue-500 border-black"
          ></input>
        </div>
      </div>

      <div className="text-white font-bold">
        <span>
          Aleady have an Account? <Link to="/login">Login</Link>
        </span>
      </div>
      {/* <Button
        name="Register"
        
        onclick={() => handleRegister()}
         className="p-2 my-5 m-2 rounded-2xl bg-white border-2 placeholder:text-blue-500 border-black"
      /> */}
      <button  onclick={handleRegister}  className="p-2 my-5 m-2 rounded-2xl bg-white border-2 placeholder:text-blue-500 border-black" > Register </button>
    </div>
    </div>
  );
}
