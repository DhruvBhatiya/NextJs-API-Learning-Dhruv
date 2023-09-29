"use client";

import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

const page = ({ params }) => {
  let id = params.userId;

  const router = useRouter();

  //   console.log(params);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetail();
  }, [id]);

  const getUserDetail = async () => {
    let userDetail = await fetch(`http://localhost:3000/api/users/${id}`);
    userDetail = await userDetail.json();
    const data = userDetail.result;
    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
    // console.log("userDetail == ", userDetail.result);
  };

  const updateUser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    // console.log("result",result);

    if (result.success) {
      alert("User Updated");
      router.push('/users')
    } else {
      alert("Please check input");
    }
  };
  return (
    <div className="flex justify-center items-center pt-24">
      <div className="flex flex-col gap-5 w-96 ">
        <h1>Update User Details</h1>

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
        <button onClick={updateUser} className="border bg-slate-400">
          Update User
        </button>
      </div>
    </div>
  );
};

export default page;
