import React from "react";
import { useState } from "react";
import axios from "axios";
const Register=()=>{
    const [name,n]=useState("");
    const [gmail,g]=useState("");
    const [password,p]=useState("");
    const A=async()=>{
        const responce=await axios.post("http://localhost:8000/register/"+name+"/"+gmail+"/"+password);
        console.log(response.data);
    }
    return(
        <>
        <input type="text" name="name" placeholder="username" onChange={(e)=>n(e.target.value)}></input>
        <input type="text" name="mail" placeholder="Enter mail" onChange={(e)=>g(e.target.value)}></input>
        <input type="password" name="password" placeholder="password" onChange={(e)=>p(e.target.value)}></input>
        <button onClick={A}>Submit</button>    
        </>
    )
}
export default Register;
