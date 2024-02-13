import React, { useState } from "react";

function NewTask({onAddTask}) {
    const [task, setTask] = useState();

    const handleChange = (e) => {
        setTask(e);
    }
    const handleClick = () => {
        onAddTask(task);
        setTask("");
    }
    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                value={task}
                onChange={(e) => handleChange(e.target.value)}
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            />
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>
                Add Task
            </button>
        </div>
    );
}

export default NewTask;
