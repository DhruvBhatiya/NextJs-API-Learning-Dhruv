"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = (props) => {
  const router = useRouter();
  const siteDomain = process.env.site_domain;
  // console.log("process.env.site_domain", siteDomain);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // console.log(props.params.editproduct);
    productDetail();
  }, []);

  // GET Single Product Detail
  const productDetail = async () => {
    let data = await fetch(
      siteDomain + "/api/products/" + props.params.editproduct
    );
    data = await data.json();
    // console.log("productDetail", data);
    if (data.success) {
      setName(data.result.name);
      setPrice(data.result.price);
      setColor(data.result.color);
      setCompany(data.result.company);
      setCategory(data.result.category);
    }
  };

  // Update Product
  const updateProduct = async () => {
    let result = await fetch(
      siteDomain + "/api/products/" + props.params.editproduct,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, color, company, category }),
      }
    );
    result = await result.json();

    if (result.success) {
      alert("Product has been Updated");
      router.push("/products");
    } else {
      alert("Please check input");
    }
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="flex flex-col gap-5 w-96 ">
        <h1 className="mb-5">Edit Product</h1>
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
          onClick={updateProduct}
          className="border h-12 px-4 bg-gray-900 text-white"
        >
          Update Product
        </button>
        <Link className="underline" href="/products">
          Go to Product List
        </Link>
      </div>
    </div>
  );
};

export default page;
