import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/projects";

export async function GET(req) {
  try {
    await connectMongoDB();

    const projects = await Project.find({});

    return new Response(JSON.stringify(projects), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch projects", {
      status: 500,
    });
  }
}
