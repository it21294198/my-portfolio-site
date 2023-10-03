import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  console.log("HelloWorld");
  return NextResponse.json({ message: "HelloWorld" }, { status: 200 });
};
