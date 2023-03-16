import React from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react';
import Axios from 'axios'
import {format} from 'date-fns';

function BugDetails() {
  const history=useNavigate()
  const [bugDetails,setBugDetails] =useState([])
  const id = useParams().id

  const deleteMovie =  () => {
     Axios
      .delete(`http://localhost:5001/deleteBug/${id}`)
      .then((res) => res.data)
      .then(()=> alert("BugDeleted Succesfully"))
      .then(() => history("/"));   
      
  };
    
    useEffect(()=>{
        Axios.get(`http://localhost:5001/bugDetails/${id}`)
           
        .then((res)=>{
          setBugDetails(res.data)
          })
     },[id])

  return (
    <div class="wrapper"><div class="card">
    <h3 class="card-title"><span style={{fontSize:"20px"}}>Title </span>:{bugDetails.title}</h3>
    <p class="card-date"><span style={{fontSize:"14px"}}>Due Date :{bugDetails.due_date}</span></p>
    <p class="card-content"><span style={{fontSize:"17px"}}>Description</span> : {bugDetails.discription}</p>
    <p class="card-content"><span style={{fontSize:"17px"}}>Project : </span>{bugDetails.project}</p>
    <p class="card-content"><span style={{fontSize:"17px"}}>Reporter : </span>{bugDetails.reporter}</p>

    <p class="card-content"><span style={{fontSize:"17px"}}>File Url : </span>{bugDetails.file_url}</p>

    <Link className="dec" to={`/updateBug/${id}`}><button class="card-btn">update</button></Link>
    <button class="card-btn" onClick={deleteMovie}>Delete</button>

 </div>
 </div>
  )
}

export default BugDetails
