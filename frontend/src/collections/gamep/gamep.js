import React from "react";
import { useNavigate } from "react-router-dom";
const Gamep=()=>
{
    const nav=useNavigate();
    const Coding=()=>
    {
        nav("/codinggame")
    }
    const Current=()=>
    {
        nav("/currentgame")
    }
    const Sports=()=>
    {
        nav("/sportsgame")
    }
    const Entertine=()=>
    {
        nav("/entertinegame")
    }
    return(
        <>
       <div className="lbtn">
        <div className="btn1">
            <button className="gbtn" onClick={Coding}><b>Enter</b></button>
        </div>
        <div className="btn2">
        <button className="gbtn" onClick={Sports}><b>Enter</b></button>
        </div>
        </div>
        <div className="lbtnr">
        <div className="btn3">
        <button className="gbtn" onClick={Current}><b>Enter</b></button>
        </div>
        <div className="btn4">
        <button className="gbtn" onClick={Entertine}><b>Enter</b></button>
        </div>
        </div>
        </>
    )
}
export default Gamep;