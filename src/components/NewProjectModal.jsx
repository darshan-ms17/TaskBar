import React, { useRef } from "react";

function NewProjectModal({ onClose, onAddProject }) {
  const nameRef = useRef();
  const descriptionRef = useRef();

  const handleAddProject = () => {
    const name = nameRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    if (name) {
      onAddProject({ id: Date.now(), name, description, tasks: [] });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center">
      <div className="bg-white bg-opacity-90 p-8 rounded-3xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">New Project</h2>
        <input
          ref={nameRef}
          type="text"
          placeholder="Project Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring focus:ring-blue-300"
        />
        <textarea
          ref={descriptionRef}
          placeholder="Project Description"
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-xl shadow-lg transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleAddProject}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg transition-all"
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewProjectModal;
