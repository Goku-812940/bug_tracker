import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './addBug.css'

function AddBug() {
  const history = useNavigate();
  const [bugName, setBugName] = useState("");
  const [discription, setdiscription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [Project, setProject] = useState("");
  const [Repoter, setRepoter] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const addToList = () => {
    Axios.post("http://localhost:5001/addBug", {
      bugName: bugName,
      discription: discription,
      dueDate: dueDate,
      Project:Project,
      Repoter:Repoter,
      fileUrl:fileUrl

    })
      .then((res) => res.data)
      .then(() => alert("Bug added Succesfully"))
      .then(() => history("/"));
  };
  return (
   <div className="center">
      <div className="card">
        <h1>ADD BUG</h1>
        <label>Bug title</label>
        <input
          type="text"
          onChange={(event) => {
            setBugName(event.target.value);
          }}
          placeholder="bug"
        />
        <label>Description</label>
        <input
          type="text"
          onChange={(event) => {
            setdiscription(event.target.value);
          }}
          placeholder="about the bug"
        />
  
        <label>due_date</label>
        <input
          type="date"
          onChange={(event) => {
            setDueDate(event.target.value);
          }}
        />
  
        <label>Project</label>
        <input
          type="text"
          onChange={(event) => {
            setProject(event.target.value);
          }}
          placeholder="project"
        />
  
        <label>Repoter</label>
        <input
          type="text"
          onChange={(event) => {
            setRepoter(event.target.value);
          }}
          placeholder="reporter"
        />
  
        <label>File Url</label>
        <input
          type="text"
          onChange={(event) => {
            setFileUrl(event.target.value);
          }}
          placeholder="url"
        />
  
        <button onClick={addToList}>Add Bug</button>
      </div>
   </div>
  );
}

export default AddBug;
