import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Headbar from "../head/head";
const Update=()=>{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [cpassword,scpassword]=useState("");
    const [err,serr]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Updtshow=async()=>{
        if(emailtest.test(gmail))
        {
            const responce1=await axios.post("https://quiz-server-1q3b.onrender.com/check/"+gmail);
        if(responce1.data)
        {
            if((password.length)>7)
               {
                if(password===cpassword)
                {
                    const responce=await axios.post("https://quiz-server-1q3b.onrender.com/update/"+gmail+"/"+password+"/"+cpassword)
                    if(responce.data)
                        {
                             nav('/192.0809.05');  
                        }
                    else
                        {
                            serr("Again change")
                        }
                }
                else
                {
                    serr("passwords not match")
                }
               }
               else
               {
                serr("Pasword length must be >=8")
               }
        }
        else
        {
            serr("Mail not found");
        }
        }
        else
        {
            serr("Enter in mail formate")
        }
    }
    return(
        <>
        <Headbar/>
        <div className="regi">
        <div className="register">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label for="gmail">Email </Form.Label>
                            <Form.Control type="email" id="gmail" placeholder="Enter email" onChange={(e)=>sgmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label for='password'>Password</Form.Label>
                            <Form.Control type="password" id="password" placeholder="Enter Password" onChange={(e)=>spassword(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label for='cpassword'>Confirm Password</Form.Label>
                            <Form.Control type="password" id="cpassword" placeholder="Enter Confirm Password" onChange={(e)=>scpassword(e.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{color:"red"}}>{err}</Form.Text>
                        </Form.Group>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="primary" onClick={Updtshow}>Update</Button>
                        </div>
                        <br/>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button href="/192.0809.05" variant="primary" type="submit">Login</Button>
                    </div>
                    </Form>
                </div>
        </div>    
        </>
    )
}
export default Update;