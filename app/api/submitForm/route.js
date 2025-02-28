import dbConnect from "@/lib/mongodb";
import FormData from "@/models/form";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { firstName, lastName, email, phoneNumber, address, city, state } =
        req.body;

      console.log("req body", req.body);
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

      NextResponse.json({ message: "Form submitted successfully!" }, { status: 201 });
    } catch (error) {
      NextResponse.json({ message: "Error submitting form" }, { status: 500 });
    }
  } else {
    NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }
}
