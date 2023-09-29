"use client";

import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    // console.log(name, price, color, company, category);

    if ((name == "", price == "", color == "", company == "", category == "")) {
      alert("Please fill all field");
    } else {
      let response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({ name, price, color, company, category }),
      });

      response = await response.json();

    //   console.log(response);
      if (response.success) {
        alert("New Product added");
        setName("");
        setPrice("");
        setColor("");
        setCompany("");
        setCategory("");
      } else {
        alert("Some error with data please check and try again");
      }
    }
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="flex flex-col gap-5 w-96 ">
        <h1 className="mb-5">Add Product</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Product Name"
          className="border h-12 px-4"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Enter Product Price"
          className="border h-12 px-4"
        />
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="Enter Product Color"
          className="border h-12 px-4"
        />
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          placeholder="Enter Product Company"
          className="border h-12 px-4"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Enter Product Category"
          className="border h-12 px-4"
        />
        <button
          onClick={addProduct}
          className="border h-12 px-4 bg-gray-900 text-white"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default page;
