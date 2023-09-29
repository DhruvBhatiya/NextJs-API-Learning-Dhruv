import { connectionStr } from "@/lib/db";
import { ProductColl } from "@/lib/model/product";

import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionStr);
    data = await ProductColl.find();
    // console.log(data);
    success = true;
  } catch (error) {
    data = { result: "Error" };
    success = false
  }

  return NextResponse.json({ result: data , success });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);

  let product = new ProductColl(payload);

  const result = await product.save();
  return NextResponse.json({ result, success: true });
}
