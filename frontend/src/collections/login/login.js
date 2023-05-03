import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const Show=async()=>{
        const responce=await axios.post("http://localhost:8000/login/"+gmail+"/"+password);
        console.log(responce.data);
        if(responce.data)
        {
            nav("/startp")
        }
        else{
            alert("failed")
        }
    }
    return(
        <>
        <div className="regi">
        <table className='tabledata'>
            <tr>
                <td className="input">
                <input type='mail' name='gmail' placeholder='Enter your mail' onChange={(e)=>sgmail(e.target.value)}></input>
                </td><td></td>
            </tr>
            <tr>
                <td className="input">
                <input type='password' name='password' placeholder='Enter your password' onChange={(e)=>spassword(e.target.value)}></input>
                </td><td></td>
            </tr>
            <tr>
                <td style={{paddingTop:"5vh",paddingBottom:'5vh',textAlign:"center"}}>
                <button onClick={Show}Submit>Submit</button>
                </td>
            </tr>
            
        </table>
        </div>    
        </>
    )
}
export default Login;

