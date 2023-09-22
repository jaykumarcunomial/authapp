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

export async function GET() {
  try {
    await connectMongoDB();

    const projects = await Project.find({});

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch projects." },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Project deleted successfully" },
    { status: 200 }
  );
}
