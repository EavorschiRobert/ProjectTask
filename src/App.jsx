import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    const handleAddTask = (newTask) => {
        setProjectsState((prevState) => {
            const taskId = Math.random();
            const task = {
                texk: newTask,
                projectId: prevState.selectedProjectId,
                id: taskId,
            };
            return {
                ...prevState,
                tasks: [...prevState.tasks, task],
            };
        });
    };
    const handleDeleteTask = (id) => {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                projects: prevState.tasks.filter((task) => task.id !== id),
            };
        });
    };

    const handleStartAddProject = () => {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    };

    const handleAddProject = (project) => {
        setProjectsState((prevState) => {
            const projectId = Math.random();
            const newProject = {
                ...project,
                id: projectId,
                pippo: projectId,
            };
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...projectsState.projects, newProject],
            };
        });
    };

    const handleCancel = () => {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    };
    const handleSelectProject = (id) => {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    };
    const handleDeleteProject = () => {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id !== prevState.selectedProjectId
                ),
            };
        });
    };
    const selectedProject = projectsState.projects.find(
        (project) => (project.pippo = projectsState.selectedProjectId)
    );
    let content = (
        <SelectedProject
            project={selectedProject}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectsState.tasks}
        />
    );

    if (projectsState.selectedProjectId === null) {
        content = (
            <NewProject onAdd={handleAddProject} onCancel={handleCancel} />
        );
    } else if (projectsState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <Sidebar
                onSelectProject={handleSelectProject}
                onStartAddProject={handleStartAddProject}
                projects={projectsState.projects}
            />
            {content}
        </main>
    );
}

export default App;
