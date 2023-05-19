import React from "react";
import { useNavigate } from "react-router-dom";
import Headbar from "../head/head";
import axios from "axios";
const Gamep=()=>
{
    const gmail=localStorage.gmail;
    const nav=useNavigate();
    const Coding=async()=>
    {
        localStorage.game="coding";
        const res=await axios.get("http://localhost:8000/codingboard/"+gmail)
        if(res.data)
        {
            nav('/myscore')
        }
        else
        {
            nav('/codinggame')
        }
    }
    const Current=async()=>
    {
        localStorage.game="current";
        const res=await axios.get("http://localhost:8000/currentboard/"+gmail)
        if(res.data)
        {
            nav('/myscore')
        }
        else
        {
            nav("/currentgame")
        }
    }
    const Sports=async()=>
    {
        localStorage.game="sports";
        const res=await axios.get("http://localhost:8000/sportsboard/"+gmail)
        if(res.data)
        {
            nav('/myscore')
        }
        else
        {
            nav("/sportsgame")
        }
    }
    const Entertine=async()=>
    {
        localStorage.game="entertine";
        const res=await axios.get("http://localhost:8000/entertineboard/"+gmail)
        if(res.data)
        {
            nav('/myscore')
        }
        else
        {
            nav("/entertinegame")
        }
    }
    return(
        <>
        <Headbar/>
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