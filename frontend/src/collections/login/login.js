import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [error,serror]=useState("");
    const Show=async()=>{
        const responce=await axios.get("http://localhost:8000/login/"+gmail+"/"+password);
        if(responce.data)
        {
            nav("/gamep")
        }
        else{
            serror("password or mail incoorect")
        }
    }
    const Regi=async()=>{
        nav("/register")
    }
    const Upadate=async()=>{
        nav("/update")
    }
    return(
        <>
        <div className="regi">
        <table className='tabledata'>
            <tr>
            <td className="input">
                <label for="gmail"><b>Gmail:: </b></label>
            </td>
                <td className="input">
                <input type='mail' name='gmail' placeholder='Enter your mail' onChange={(e)=>sgmail(e.target.value)}></input>
                </td>
            </tr>
            <tr>
            <td className="input">
                <label for="password"><b>Password:: </b></label>
            </td>
                <td className="input">
                <input type='password' name='password' placeholder='Enter your password' onChange={(e)=>spassword(e.target.value)}></input>
                </td>
            </tr>
            <td style={{color:'orange-red'}} colSpan={2} align="center">{error}</td>
            <tr>
                <td style={{paddingTop:"4vh",paddingBottom:'5vh',textAlign:"center"}} colSpan={2}>
                <button style={{backgroundColor:"lightgreen", borderRadius:"20%"}} onClick={Show}><b>Login</b></button>
                </td>
            </tr>
            <tr>
                <td>
                    <button  style={{backgroundColor:'yellow',borderColor:'ButtonShadow',marginBottom:'5vh'}} onClick={Regi}><b>New account</b></button>
                </td>
                <td  align="right">
                    <button style={{backgroundColor:'orange',borderColor:'ButtonHighlight',marginBottom:'5vh'}} onClick={Upadate}><b>Forgot password</b></button>
                </td>
            </tr>
        </table>        
        </div>    
        </>
    )
}
export default Login;

