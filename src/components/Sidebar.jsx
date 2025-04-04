import React from "react";

function Sidebar({ projects, onAddProject, onProjectSelect, onProjectDelete }) {
  return (
    <aside className="w-72 bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6 rounded-r-2xl shadow-md">
      <h2 className="text-xl font-bold mb-6">YOUR PROJECTS</h2>
      <button
        onClick={onAddProject}
        className="w-full mb-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all"
      >
        + Add Project
      </button>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex justify-between items-center bg-blue-800 p-3 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            <button
              className="flex-1 text-left text-sm font-semibold hover:underline"
              onClick={() => onProjectSelect(project)}
            >
              {project.name}
            </button>
            <button
              className="text-sm text-red-400 hover:text-red-500"
              onClick={() => onProjectDelete(project.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
