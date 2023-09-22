import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/projects";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, name, email, role } = await req.json();

    await connectMongoDB();
    await Project.create({ title, name, email, role });

    return NextResponse.json({ message: "Project created." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while creating the project." },
      { status: 500 }
    );
  }
}
