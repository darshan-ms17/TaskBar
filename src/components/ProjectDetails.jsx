import React, { useState, useRef } from "react";

function ProjectDetails({ project }) {
  const [tasks, setTasks] = useState(project.tasks || []);
  const taskInputRef = useRef();

  const addTask = () => {
    const task = taskInputRef.current.value.trim();
    if (task) {
      setTasks((prev) => [...prev, { id: Date.now(), name: task }]);
      taskInputRef.current.value = "";
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-blue-900">{project.name}</h1>
      <p className="text-gray-600 mb-6">{project.description || "No description provided."}</p>
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      <div className="flex gap-3 mb-4">
        <input
          ref={taskInputRef}
          type="text"
          placeholder="Add a new task"
          className="flex-1 p-3 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={addTask}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all"
        >
          Add Task
        </button>
      </div>
      {tasks.length > 0 ? (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-blue-100 p-3 rounded-lg shadow text-blue-800"
            >
              {task.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">This project does not have any tasks yet.</p>
      )}
    </div>
  );
}

export default ProjectDetails;
