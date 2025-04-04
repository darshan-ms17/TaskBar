import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";
import NewProjectModal from "./components/NewProjectModal";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
    setShowNewProjectModal(false);
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
    if (selectedProject?.id === id) setSelectedProject(null);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        projects={projects}
        onAddProject={() => setShowNewProjectModal(true)}
        onProjectSelect={setSelectedProject}
        onProjectDelete={deleteProject}
      />
      <main className="flex-1 p-6 bg-gray-100">
        {selectedProject ? (
          <ProjectDetails project={selectedProject} />
        ) : (
          <div className="text-center text-gray-500">
            Select a project or add a new one to get started.
          </div>
        )}
      </main>
      {showNewProjectModal && (
        <NewProjectModal
          onClose={() => setShowNewProjectModal(false)}
          onAddProject={addProject}
        />
      )}
    </div>
  );
}

export default App;
