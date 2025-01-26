import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  console.log("Get rover URL");
  return NextResponse.json(
    { url: "https://axum-jwt-static-page-template-4gs7.shuttle.app" },
    { status: 200 }
  );
};
