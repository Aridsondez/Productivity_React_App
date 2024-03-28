
import React, { useState } from "react";
import "./addform.css";

const Form = ({ addTask }) => { // Receive addTask function as prop
  const [taskName, setTaskName] = useState("");
  const [startTime, setStartTime]=useState("");
  const [length, setLength]= useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return; // Prevent empty task names
    addTask({taskName, startTime,length}); // Call addTask function with taskName
    setTaskName("");
    setStartTime("");
    setLength(""); // Clear input after submitting
  };

  return (
    <div className="formbackground close-form" id="showform">
      <button className="exit-form" onClick={Form.exitFrom}><i class="fa-solid fa-xmark"></i></button>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Task Name:
          <input
            type="text"
            name="Task Name"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
  
        What Time Will You Start The Task:
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />

        How Long Will it take:
        <input type="number" min={5} max={100} value={length} onChange={(e) => setLength(e.target.value)} /> MINUTES
        </label>
        <button className="button" type="submit">Add Task</button>
      </form>
    </div>
  );
};


Form.exitFrom=()=>{
    document.getElementById("showform").classList.remove("from-appear");
    document.getElementById("showform").classList.add("close-form");
};

Form.showForm=()=>{

    document.getElementById("showform").classList.remove("close-form")
    document.getElementById("showform").classList.add("form-appear")
};
export default Form