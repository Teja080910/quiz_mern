import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Headbar from "../head/head";
const Login=()=>{
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [error,serror]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Login=async()=>{
        if(emailtest.test(gmail))
        {
            const responce=await axios.post("http://localhost:8000/login/"+gmail+"/"+password);
            if(responce.data)
        {
            sessionStorage.name=responce.data.name;
            sessionStorage.gmail=responce.data.gmail;
            window.location="/192.0809.06";
            
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
                        <Button href="/192.0809.11" style={{marginLeft:'5%'}} >Signup</Button>
                        <Button href="/192.0809.12" >Forget password</Button>
                    </div>
                    </Form>
        </div>
        {/* <table className='tabledata'>
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
        </table>         */}
        </div>    
        </>
    )
}
export default Login;

