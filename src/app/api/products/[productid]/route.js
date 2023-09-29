import { connectionStr } from "@/lib/db";
import { ProductColl } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  // console.log(content.params.productid);
  const productId = content.params.productid;

  const filter = { _id: productId };
  const payload = await request.json();
  // console.log("payload ==>", payload);

  await mongoose.connect(connectionStr);
  const result = await ProductColl.findOneAndUpdate(filter, payload);

  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const productId = content.params.productid;
  const record = { _id: productId };

  await mongoose.connect(connectionStr);
  const result = await ProductColl.findById(record);

  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, content) {
  const productId = content.params.productid;
  const record = { _id: productId };
  await mongoose.connect(connectionStr);
  const result = await ProductColl.deleteOne(record);
  return NextResponse.json({ result, success: true });
}
