import React from "react";
import { useState } from "react";
import axios from "axios";
const Reg=()=>{
    const [g,t]=useState("");
    const [p,u]=useState("");
    const name=async()=>{
        const responce=await axios.post("http://localhost:8000/sample/"+g+"/"+p);
        console.log(responce.data);
    }
    return(
        <>
        <input type="text" name="question" placeholder="enter question" onChange={(e)=>t(e.target.value)}></input>
        <input type="text" name="answer" placeholder="Enter answer" onChange={(e)=>u(e.target.value)}></input>
        <button onClick={name}>insert</button>    
        </>
    )
}
export default Reg;
