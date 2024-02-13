import React from "react";
import Button from "./Button";

function Sidebar({
    onStartAddProject,
    projects,
    onSelectProject,
    selectedProjectId,
}) {
    return (
        <aside className="h-screen w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <div>
                <Button
                    onClick={onStartAddProject}
                    className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 tesxt-stone-400 hover:bg-stone-600 hover:text-stone-100"
                >
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8">
                {projects &&
                    projects.map((project) => {
                        let cssClasses="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                        if(project.id === selectedProjectId){
                            cssClasses += ' gb-stone-800 text-stone-200'
                        } else{
                            cssClasses += ' gb-stone-400'
                        }
                        return (
                            <li key={project.id}>
                                {console.log('ID', project)}
                                <button
                                    onClick={() => onSelectProject(project.id)}
                                    className={cssClasses}
                                >
                                    {project.title}
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </aside>
    );
}

export default Sidebar;
