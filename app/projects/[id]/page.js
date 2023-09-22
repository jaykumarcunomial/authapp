import Header from "./Header";

const getProjectById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Project({ params }) {
  const { id } = params;

  const { project } = await getProjectById(id);

  console.log(id);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title={project.title} />

      <div className="mx-auto p-10">
        <div>Title: {project.title}</div>
        <div>Name: {project.name}</div>
        <div>Email: {project.email}</div>
        <div>Role: {project.role}</div>
      </div>
    </div>
  );
}
