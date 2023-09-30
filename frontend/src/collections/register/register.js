import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Headbar from "../head/head";
const Register=()=>{
    const nav=useNavigate();
    const [name,sname]=useState("");
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [cpassword,scpassword]=useState("");
    const [err,serr]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Register=async()=>{
        if(emailtest.test(gmail))
        {
            const responce1=await axios.post("http://localhost:8000/check/"+gmail)
            if(responce1.data)
            {
                serr("Mail already Exist")
            }
            else
            {
               if(password.length>7)
               {
                if(password === cpassword)
                {
                    const responce=await axios.post("http://localhost:8000/register/"+name+"/"+gmail+"/"+password)
                    if(responce.data)   
                    {
                        nav("/192.0809.05")
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
               else
               {
                serr("password length must be >=8")
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
        <Headbar/>
        <div className="regi">
                <div className="register">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label for='name'>Name</Form.Label>
                            <Form.Control type="text" id="name" placeholder="Enter Full Name" onChange={(e)=>sname(e.target.value.charAt(0).toLocaleUpperCase()+e.target.value.slice(1))} />
                        </Form.Group>

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
                            <Button variant="primary" onClick={Register}>Sumbit</Button>
                        </div>
                        <br/>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Form.Text>Already have an account</Form.Text>
                        <Button href="/192.0809.05" style={{marginLeft:'5%'}} variant="primary" type="submit">Login</Button>
                    </div>
                    </Form>
                </div>
        </div>    
        </>
    )
}
export default Register;

