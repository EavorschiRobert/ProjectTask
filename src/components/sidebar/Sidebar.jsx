import React from "react";

function Sidebar({ projects, onAdd, details }) {
    return (
        <div className="w-2/5 mt-10 bg-stone-800 rounded-tr-3xl max-w-lg">
            <div className="mt-8 ml-8">
                <h3 className="text-white">YOUR PROJECTS</h3>
                <button
                    onClick={onAdd}
                    className="mt-8 bg-stone-700 hover:bg-stone-400 text-stone-200 py-2 px-4 rounded"
                >
                    + Add Project
                </button>
            </div>
            <div className="mt-5 flex flex-col items-start">
            {projects &&
                projects.map((item, index) => (
                    <button
                        className="ml-8 mt-2 bg-stone-800 hover:bg-stone-700 text-white py-2 px-4 rounded"
                        key={index}
                        onClick={() => details(item.title)}
                    >

                        {item.title}
                    </button>
                ))}
            </div>
            
        </div>
    );
}

export default Sidebar;
