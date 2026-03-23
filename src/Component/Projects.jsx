// src/components/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
// Projects array with local images
const projects = [
  {
    title: "AI Image Generator",
    description: "Generate images using AI models with user input.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOtXwPKvbsBiQH2Efrk6y2UeToVGvlhnpVg&s", // External URL
    tech: ["React", "Node", "AI"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase skills and projects.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6igFGERqSax6xXPHT-8Lr3iBdw5Fg4xTGxQ&s",
    tech: ["React", "Tailwind", "JS"],
  },
  {
    title: "E-commerce App",
    description: "Online store with cart & payment",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHcDU8HC3dgrHNjMLB_lU6vnLdrx9zQ0G1g&s",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    title: "Weather App",
    description: "Displays real-time weather data for any location using API integration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3HhsD7Tm9PzXiF3BQUAEqjhpwMdAuhuOew&s",
    tech: ["React", "API", "CSS"],
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with rooms and direct messaging.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngTaMPWw_ss5sCExrBELj26gQU2_H2Ms2lQ&s",
    tech: ["React", "Node", "Socket.io"],
  },
  {
    title: "Task Manager",
    description: "A task management app with CRUD functionality and deadlines.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Hl55pXvzF-cMFN_T7kL2w-XaHeMU0Jq7-A&s",
    tech: ["React", "Node", "MongoDB", "Tailwind"],
  },
];



const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
        <h1 className="text-4xl font-bold text-white">My Projects</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg transition"
          >
            Back Home
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
              loading="lazy"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;