import React from "react";
import "./tasks.css"
import { useState, useEffect } from "react";
import Form from "./AddForm";
import Work from "./GoogleSign";

const Tasks = () =>{

    const [tasks, setTasks]=useState([])

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);


    const addTask=(taskName)=>{
        const updatedTasks=[...tasks, taskName];
        setTasks(updatedTasks);
        localStorage.setItem("tasks",JSON.stringify(updatedTasks))
    }

    const removeTask=(index)=>{
        const updatedTasks=[...tasks];
        updatedTasks.splice(index,1);
        setTasks(updatedTasks)
        localStorage.setItem("tasks",JSON.stringify(updatedTasks));
    }
    
    return(
        <>
        <a className="addTasks" onClick={Form.showForm}><i className="fa-solid fa-user-plus"></i></a>
        <div className="task-list" id="taskList">
            {tasks.map((task, index) => (
                <div className="new-task">
                    <div className="innerText" id="theTask"key={index}>{task.taskName} | @{task.startTime}</div>
                    <a className="remove-btn" onClick={()=>removeTask(index)}>-</a>
                </div>
            ))}

        </div>
        <Form addTask={addTask} />
        </>
    )

}

export default Tasks
