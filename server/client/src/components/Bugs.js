import React, { useState,useEffect } from "react";
import "./bug.css";
import Axios from 'axios'
import { Link } from 'react-router-dom'
import {format} from 'date-fns'

function Bugs() {

  const [bugList,setBugList ] =useState([])

  useEffect(()=>{
     Axios.get('http://localhost:5001/getBugs').then((response)=>{
        setBugList(response.data)
     })
  },[])


  return (
    <div className="bug">
     <div class="buttons-container">
     <Link className="dec" to={'/addBug'}><button>ADD BUGS</button></Link>
</div>
      <h1>Bug List</h1>
       
       {bugList.map((val,key)=>{
        return<div class="wrapper" key={key}><div class="card">
        <h3 class="card-title">{val.title}</h3>
        <p class="card-date">Due Date :{format(new Date(val.due_date), 'yyyy/MM/dd')}</p>
        <p class="card-content">{val.discription}</p>
        <Link className="dec" to={`/bugDetails/${val._id}`}><button class="card-btn">MORE DETAILS</button></Link>
     </div>
     </div>
       })}
    </div>
  );
}

export default Bugs;
