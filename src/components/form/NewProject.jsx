import React, { useState } from "react";

function NewProject({ save, cancel }) {
  const [isValid, setIsValid] = useState(false);
    const [project, setProject] = useState({
        title: "",
        description: "",
        dueDate: ""
    });

    const onChangeForm = (value, field) => {
        setProject((prevState) => {
            return {
                ...prevState,
                [field]: value
            };
        });
    };

    return (
        <div className="my-20 text-stone-700 w-3/5">
            <div className="flex justify-end">
                <button
                    onClick={() => {
                        setProject({
                            title: "",
                            description: "",
                            dueDate: "",
                        });
                        cancel();
                    }}
                >
                    Cancel
                </button>
                <button
                    onClick={() => save(project)}
                    className="ml-5 bg-stone-700 hover:bg-stone-400 text-white font-bold py-2 px-4 rounded"
                >
                    Save
                </button>
            </div>
            <div className="flex justify-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/6 max-w-lg">
                    <div className="mb-4">
                        <label>Title</label>
                        <input
                        className="bg-stone-300 text-stone-700 shadow appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  border-b-2 border-stone-500 py-2"
                            id="username"
                            type="text"
                            placeholder="Title"
                            required
                            value={project.title}
                            onChange={(e) =>
                                onChangeForm(e.target.value, "title")
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label>Description</label>
                        <input
                             className="bg-stone-300 text-stone-700 shadow appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  border-b-2 border-stone-500 py-2"
                            id="username"
                            type="text"
                            placeholder="Description"
                            required
                            value={project.description}
                            onChange={(e) =>
                                onChangeForm(e.target.value, "description")
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label>Due Date</label>
                        <input
                             className="bg-stone-300 text-stone-700 shadow appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  border-b-2 border-stone-500 py-2"
                            id="username"
                            type="date"
                            placeholder="Description"
                            required
                            value={project.dueDate}
                            onChange={(e) =>
                                onChangeForm(e.target.value, "dueDate")
                            }
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewProject;
