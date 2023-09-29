import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";
import React from "react";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

const page = async () => {
  const products = await getProducts();
  // console.log("products ==> ", products);
  return (
    <div>
      <h1>Product List</h1>
      <table className="border-2">
        <thead>
          <tr>
            <td className="border-4 font-semibold">Name</td>
            <td className="border-4 font-semibold">Price</td>
            <td className="border-4 font-semibold">Color</td>
            <td className="border-4 font-semibold">Company</td>
            <td className="border-4 font-semibold">Category</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, key) => (
            <tr key={key}>
              <td className="border-2">{item.name}</td>
              <td className="border-2">{item.price}</td>
              <td className="border-2">{item.color}</td>
              <td className="border-2">{item.company}</td>
              <td className="border-2">{item.category}</td>
              <td className="border-2"><Link href={"products/"+item._id}>Edit</Link></td>
              <td className="border-2"><DeleteProduct /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
