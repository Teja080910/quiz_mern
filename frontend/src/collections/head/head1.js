import React from "react";
import { useNavigate } from "react-router-dom";
const Headbar1=()=>
{
    const nav=useNavigate();
    const Home=async()=>
    {
        nav('/')
    }
    const About=async()=>
    {
        nav('/about')
    }
    return(
        <div className="header">
            <div className="headn">
            <div><b>welcome::</b></div>
            <button style={{marginLeft:'60%',backgroundColor:'blue',width:'80px'}} onClick={Home}><b>Home</b></button>
            <button style={{marginLeft:'10%',backgroundColor:'blue',width:'80px'}} onClick={About}><b>About</b></button>
            </div>
        </div>
    )
}
export default Headbar1;