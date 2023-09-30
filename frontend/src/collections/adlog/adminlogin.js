import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Headbar from "../head/head";
const Adminlogin=()=>{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [error,serror]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Login=async()=>{
        if(emailtest.test(gmail))
        {
            const responce=await axios.post("https://quiz-server-1q3b.onrender.com/adminlogin/"+gmail+"/"+password);
            if(responce.data)
        {
            nav("/192.0809.03")
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
    return(
        <>
        <Headbar/>
        <div className="regi">
        <div className="login">
        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label for="gmail">Email </Form.Label>
                            <Form.Control type="email" id="gmail" placeholder="Enter email" onChange={(e)=>sgmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label for='password'>Password</Form.Label>
                            <Form.Control type="password" id="password" placeholder="Enter Password" onChange={(e)=>spassword(e.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{color:"red"}}>{error}</Form.Text>
                        </Form.Group>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="primary" onClick={Login}>Login</Button>
                        </div>
                        <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Button href="/welcome1" style={{marginLeft:'5%'}} >Signup</Button>
                        <Button href="/192.0809.12" >Forget password</Button>
                    </div>
                    </Form>
        </div>
        </div>        
        </>
    )
}
export default Adminlogin;

