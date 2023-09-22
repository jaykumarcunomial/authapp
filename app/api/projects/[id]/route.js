import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/projects";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newName: name,
    newEmail: email,
    newRole: role,
  } = request.json();
  await connectMongoDB();
  await Project.findByIdAndUpdate(id, { title, name, email, role });
  return NextResponse.json({ massage: "Project updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const project = await Project.findOne({ _id: id });
  return NextResponse.json({ project }, { status: 200 });
}
