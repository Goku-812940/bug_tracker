import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function UpdateBug() {
  const [dueDate, setDueDate] = useState(null);
  const [bugName, setbugName] = useState("");
  const [bugDisc, setbugDisc] = useState("");
  const [Project, setProject] = useState("");
  const [Repoter, setRepoter] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const id = useParams().id;
  const history = useNavigate();
  const url = `http://localhost:5001/updateBug/${id}`;

  const updateBug = () => {
    Axios.put(url, {
      bugName: bugName,
      bugDisc: bugDisc,
      dueDate:dueDate,
      Project:Project,
      Repoter:Repoter,
      fileUrl:fileUrl
    }).then(() => history("/"));
  };

  return (
    <div className="center">
      <div className="card">
        
        <h1>Update Bug</h1>
        <label>Name</label>
        <input
          type="text"
          onChange={(event) => {
            setbugName(event.target.value);
          }}
          plac
          placeholder="bugs"
        />
        <label>discr</label>
        <input
          type="text"
          onChange={(event) => {
            setbugDisc(event.target.value);
          }}
          placeholder="bugs"
        />
        <label>due_date</label>
        <input type="date"  onChange={(event) => {
            setDueDate(event.target.value);
          }} placeholder="bugs" />
  
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
          
        <button onClick={updateBug}>update Bug</button>
      </div>
    </div>
  );
}

export default UpdateBug;
