import React, { useRef } from "react";

function Tasks({ tasks, onAddTask, onDeleteTask }) {
  const taskRef = useRef();

  const handleAddTask = () => {
    const task = taskRef.current.value.trim();
    if (task) {
      onAddTask(task);
      taskRef.current.value = "";
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Tasks</h3>
      <div className="flex gap-2 mb-4">
        <input
          ref={taskRef}
          type="text"
          placeholder="New Task"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <span>{task.name}</span>
            <button
              className="text-red-500"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
