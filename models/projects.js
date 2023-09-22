import mongoose, { Schema, models } from "mongoose";

const projectsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Project = models.Project || mongoose.model("Project", projectsSchema);
export default Project;
