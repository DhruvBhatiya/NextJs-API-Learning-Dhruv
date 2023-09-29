"use client";

import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    console.log(name, age, email);

    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });

    response = await response.json();
    // console.log(response);
    if(response.success){
      alert("New user added")
    }else {
      alert("Some error with data please check and try again")
    }
  };

  return (
    <div className="flex justify-center items-center pt-24">
      <div className="flex flex-col gap-5 w-96 ">
        <h1 className="mb-5">Add New User</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
          className="border"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          placeholder="Enter Age"
          className="border"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter Email"
          className="border"
        />
        <button onClick={addUser} className="border">
          Add User
        </button>
      </div>
    </div>
  );
};

export default page;
