import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Adminregister=()=>{
    const nav=useNavigate();
    const [name,sname]=useState("");
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [cpassword,scpassword]=useState("");
    const [err,serr]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Show=async()=>{
        if(emailtest.test(gmail))
        {
            const responce1=await axios.post("http://localhost:8000/admincheck/"+gmail)
            if(responce1.data)
            {
                serr("Mail already Exist")
            }
            else
            {
                const responce=await axios.post("http://localhost:8000/adminregister/"+name+"/"+gmail+"/"+password+"/"+cpassword)
                if(password === cpassword)
                {
                    if(responce.data)   
                    {
                        nav("/192.0809.04")
                    }
                    else
                    {
                    serr("Error")
                    }
                }
                else
                {
                    serr("Passwords Not Match")
                }
            }
        }
        else
        {
            serr("Mail must be Email format")
        }
    }
    return(
        <>
        <div className="regi">
        <table className='tabledata'>
            <tr>
                <td className="input">
                    <label for="name"><b>name:: </b></label>
                </td>
                <td className="input">
                <input type='text' name='name' placeholder='Enter your full name' onChange={(e)=>sname(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="name"><b>Gmail:: </b></label>
                </td>
                <td className="input">
                <input type='mail' name='gmail' placeholder='Enter your mail' onChange={(e)=>sgmail(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="name"><b>Password::</b></label>
                </td>
                <td className="input">
                <input type='password' name='password' placeholder='Enter your password' onChange={(e)=>spassword(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="name"><b>confirm password::</b></label>
                </td>
                <td className="input">
                <input type='password' name='cpassword' placeholder='Enter your confirm password' onChange={(e)=>scpassword(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td colSpan={2} style={{color:"red",paddingTop:'2vh'}} align="center"><b>{err}</b></td>
            </tr>
            <tr>
                <td className="input" style={{paddingBottom:'5vh'}} colSpan={2}>
                <button style={{backgroundColor:'greenyellow'}} onClick={Show}><b>Submit</b></button>
                </td>
            </tr>
        </table>
        </div>    
        </>
    )
}
export default Adminregister;

