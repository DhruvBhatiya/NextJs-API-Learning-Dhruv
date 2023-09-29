import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  // console.log(content.params.id)

  const userData = user.filter((item) => item.id == content.params.id);
  // console.log("userData ==>", userData)
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

// Update
export async function PUT(request, content) {
  let payload = await request.json();

  payload.id = content.params.id;
  // console.log("payload == ", payload);
  if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Request data is not valid", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

//Delete
export function DELETE(request, content) {
  let id = content.params.id;

  if (id) {
    return NextResponse.json(
      { result: "User Deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Internal error, please after some time", success: false },
      { status: 400 }
    );
  }
}
