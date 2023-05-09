import React from "react";
import { useNavigate } from "react-router-dom";
const Headbar=()=>
{
    const nav=useNavigate();
    const name=localStorage.name;
    const Home=async()=>
    {
        nav('/')
    }
    const About=async()=>
    {
        nav('/about')
    }
    const Myapps=async()=>
    {
        nav('/gamep')
    }
    return(
        <div className="header">
            <div className="headn">
            <div><b>welcome::{name}</b></div>
            <button style={{marginLeft:'60%',background:'none',width:'80px',border:'none',color:'blue'}} onClick={Home}><b>Home</b></button>
            <button style={{marginLeft:'5%',background:'none',width:'80px',border:'none',color:'blue'}} onClick={About}><b>About</b></button>
            <button style={{marginLeft:'5%',background:'none',width:'80px',border:'none',color:'blue'}} onClick={Myapps}><b>My Games</b></button>
            </div>
        </div>
    )
}
export default Headbar;