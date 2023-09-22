"use client";

import ProjectsList from "@/components/ProjectsList";
import { useState } from "react";

export default function Projects() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  //   console.log(title);
  //   console.log(name);
  //   console.log(email);
  //   console.log(role);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/projects", {
        method: "POST",
        body: JSON.stringify({
          title,
          name,
          email,
          role,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("Project creation failed");
      }
    } catch (error) {
      console.log("Error during project creation: ", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-sm mx-auto py-10"
      >
        {/* Title */}
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="title"
            className="block text-xs font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Project Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Name */}
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Role */}
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="role"
            className="block text-xs font-medium text-gray-900"
          >
            Role
          </label>
          <input
            type="text"
            name="role"
            id="role"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Role"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form>

      <ProjectsList />
    </>
  );
}
