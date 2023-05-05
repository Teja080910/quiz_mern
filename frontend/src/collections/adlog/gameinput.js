import React from "react";
import { useState } from "react";
import axios from "axios";
const Gameinput=()=>{
    const [id,sid]=useState("");
    const [ques,sques]=useState("");
    const [ans,sans]=useState('');
    const coding=async()=>{
        const responce=await axios.post("http://localhost:8000/coding/"+ques+"/"+ans);
        console.log(responce.data);
    }
    const sports=async()=>{
        const responce=await axios.post("http://localhost:8000/sports/"+id+"/"+ans);
        console.log(responce.data);
    }
    const current=async()=>{
        const responce=await axios.post("http://localhost:8000/current/"+ques+"/"+ans);
        console.log(responce.data);
    }
    const entertine=async()=>{
        const responce=await axios.post("http://localhost:8000/entertine/"+id+"/"+ans);
        console.log(responce.data);
    }
    return(
        <>
        <div style={{backgroundColor:"aqua",marginTop:'-2%',height:'100vh'}}>
        <div className="inputback">
        <h2>Coding data</h2>
        <input type="text" name="ques" placeholder="enter question" onChange={(e)=>sques(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer" onChange={(e)=>sans(e.target.value)}></input><br></br>
        <button onClick={coding}>insert</button>
        </div>
        <div className="inputback">
        <h2>Sports data</h2>
        <input type="number" name="id" placeholder="enter id" onChange={(e)=>sid(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer" onChange={(e)=>sans(e.target.value)}></input><br></br>
        <button onClick={sports}>insert</button>
        </div>
        <div className="inputback">
        <h2>Current Affair data</h2>
        <input type="text" name="ques" placeholder="enter question" onChange={(e)=>sques(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer" onChange={(e)=>sans(e.target.value)}></input><br></br>
        <button onClick={current}>insert</button>
        </div> 
        <div className="inputback">
        <h2>Entertinment data</h2>
        <input type="number" name="question" placeholder="enter id" onChange={(e)=>sid(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer" onChange={(e)=>sans(e.target.value)}></input><br></br>
        <button onClick={entertine}>insert</button>
        </div>
        </div>
        </>
    )
}
export default Gameinput;
