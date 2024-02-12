import React from "react";
import noProject from "../../assets/no-projects.png";
function Home({onAdd}) {
    return (
        <div className="my-20 text-stone-700 w-3/5">
            <div className="flex flex-col items-center">
                <img src={noProject} alt="no project" className="mb-8 size-20" />
                <h1 className="text-center text-5xl font-bold mb-8 text-stone-700">
                No Project Selected
            </h1>
            <p >
                Select a project or get started with a new one
            </p>
            <button onClick={onAdd} className="mt-8 bg-stone-700 hover:bg-stone-400 text-white font-bold py-2 px-4 rounded">
                Create a new project
            </button>
            </div>
        </div>
    );
}

export default Home;
