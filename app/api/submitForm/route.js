import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import FormData from "@/models/form";

export async function POST(req) {
  try {
    await dbConnect();

    const { firstName, lastName, email, phoneNumber, address, city, state } =
      await req.json(); // ✅ Correct way to get request body

    console.log("Request Body:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      state,
    });

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !address ||
      !city ||
      !state
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newFormEntry = new FormData({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      state,
    });

    await newFormEntry.save();

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 201 }
    ); // ✅ Return response
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { message: "Error submitting form" },
      { status: 500 }
    ); // ✅ Return response
  }
}

export async function GET() {
  try {
    await dbConnect();
    console.log("Database connected successfully.");
    const users = await FormData.find(
      {},
      "firstName lastName email phoneNumber address city state"
    );
    console.log("Fetched users:", users);
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching details:", error);
    return NextResponse.json(
      { message: "Error fetching details of the user", error },
      { status: 500 }
    );
  }
}
