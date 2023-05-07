import React from "react";
import { useNavigate } from "react-router-dom";
const Headbar1=()=>
{
    const name=localStorage.name;
    return(
        <div className="header">
            <div className="headn">
            <div><b>welcome::</b></div>
            <button style={{marginLeft:'60%',backgroundColor:'blue',width:'80px'}}><b>Home</b></button>
            <button style={{marginLeft:'10%',backgroundColor:'blue',width:'80px'}} ><b>About</b></button>
            </div>
        </div>
    )
}
export default Headbar1;