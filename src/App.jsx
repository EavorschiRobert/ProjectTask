import { useState } from "react";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import NewProject from "./components/form/NewProject";
import ShowDetails from "./components/details/ShowDetails";

function App() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [project, setProject] = useState();
  const [showDetails, setShowDetails] = useState(false);
  let projectDetail;
  const handleShowForm = () => {
    setShowDetails(false);
    setShowForm((prevState) => !prevState)
  }
  const onSave = (project) => {
    const newProjects = projects;
    newProjects.push(project);
    setProjects([...newProjects]);
    setShowForm((prevState) => !prevState);
  }
  const onDetails = (project) => {
    setShowForm(false);
    setShowDetails(true);
    projectDetail = projects.filter((item) => item.title === project);
    setProject(...projectDetail)
  }
  const addTask = (project, task) => {
    const newProjects = projects.map((item) => {
      let proj = item;
      if(item.title === project.title){
        if(item.tasks){
          item.tasks.push(task)
        } else {
          item.tasks = [task]
        }
      }
      return proj
    })
    setProjects(newProjects);
    console.log('PROJ', projects);
  }
  const clearTask = (title, task) => {
    const newProjects = projects.map((item) => {
      if(item.title === title){
        const newTasks = item.tasks.filter((e) => e !== task);
        console.log('NEW', newTasks);
        item.tasks = newTasks;
      }
      return item
    })
    console.log(newProjects);
    setProjects(newProjects);
  }
    return (
        <>
            <div className="h-screen w-screen flex">
                <Sidebar projects={projects} onAdd={handleShowForm} details={onDetails}/>
                {(!showForm && !showDetails ) && <Home onAdd={handleShowForm}/>}
                {showForm && <NewProject save={onSave} cancel={handleShowForm}/>}
                {showDetails && <ShowDetails project={project} add={addTask} clear={clearTask}/>}
            </div>
        </>
    );
}

export default App;
