import React, { useRef, useState } from "react";

function ShowDetails({ project, add, clear }) {
    const dataProj = new Date(project.dueDate).toDateString();
    const [task, setTask] = useState("");

    return (
        <div className="my-20 ml-5 mr-5 text-stone-700 w-3/5">
            <h1 className="text-4xl font-bold text-stone-700">
                {project.title}
            </h1>
            <p className="mb-3">{dataProj}</p>
            <p className="border-b border-stone-700">{project.description}</p>
            <h4 className="mt-5 text-4xl font-bold text-stone-700">Tasks</h4>
            <div className="flex">
                <input
                    className="mr-3 max-w-1/2 bg-stone-300 text-stone-700 shadow appearance-none rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  border-b-2 border-stone-500 py-2"
                    id="username"
                    type="text"
                    placeholder="Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={() => add(project, task)}>Add Task</button>
            </div>
            <div className={`${(project.tasks && project.tasks.length !== 0) ? 'mb-5 text-stone-700 mt-5 mr-3 max-w-1/2 bg-stone-300 text-stone-700 shadow appearance-none rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline   py-2' : 'mt-5'}`}>
                {
                    project.tasks &&
                    project.tasks.map((item, index) => (
                        <div  className="mb-3 flex justify-between" key={`${index}-${project.title}`}>
                            <div>{item}</div>
                            <button onClick={()=> clear(project.title, item)}>Clear</button>
                        </div>
                    ))}
            </div>
            {(project.tasks && project.tasks.length === 0) &&  <p>
                No Tasks
            </p>}
           
        </div>
    );
}

export default ShowDetails;
