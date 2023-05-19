import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Headbar1 from "../head/head1";
const Adminlogin=()=>{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [error,serror]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Show=async()=>{
        if(emailtest.test(gmail))
        {
            const responce=await axios.get("http://localhost:8000/adminlogin/"+gmail+"/"+password);
            if(responce.data)
        {
            nav("/welcome")
        }
        else{
            serror("password or mail incorrect")
        }
        }
        else
        {
            serror("Enter in email formate")
        }
    }
    const Regi=async()=>{
        nav("/welcome1")
    }
    const Upadate=async()=>{
        nav("/update")
    }
    return(
        <>
        <Headbar1/>
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
            <td style={{color:'orangered'}} colSpan={2} align="center"><b>{error}</b></td>
            <tr>
                <td style={{paddingTop:"4vh",paddingBottom:'5vh',textAlign:"center"}} colSpan={2}>
                <button style={{background:"none",color:'ButtonHighlight', border:'none'}} onClick={Show}><b>Login</b></button>
                </td>
            </tr>
            <tr>
                <td>
                    <button  style={{background:'none',border:'none',marginBottom:'5vh',color:'blue'}} onClick={Regi}><b>New account</b></button>
                </td>
                <td  align="right">
                    <button style={{background:'none',border:'none',marginBottom:'5vh',color:"blueviolet"}} onClick={Upadate}><b>Forgot password</b></button>
                </td>
            </tr>
        </table>        
        </div>        
        </>
    )
}
export default Adminlogin;

