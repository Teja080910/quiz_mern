import React from "react";
import { useNavigate } from "react-router-dom";
import Headbar1 from "../head/head1";
const Wel=()=>{
    const nav=useNavigate();
   const insertion=()=>{
    nav('/gameinput')
   }
    return(
        <>
        <Headbar1/>
        <div className="weldar">
            <div className="welname">
            <b>Welcome Darling</b>
            <img src="/photos/welcome.png" alt="welcome" width={"150px"}></img>
            <button onClick={insertion} style={{width:'20%',height:'10%',backgroundColor:'gray',color:'white',margin:'0% 45% 0% 35%'}}>Enter into insertion</button>
            </div>
        </div>
        </>
    )
    
};
export default Wel;