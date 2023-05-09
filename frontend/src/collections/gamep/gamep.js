import React from "react";
import { useNavigate } from "react-router-dom";
import Headbar from "../head/head";
import axios from "axios";
const Gamep=()=>
{
    const gmail=localStorage.gmail;
    const name=1;
    const nav=useNavigate();
    const Coding=async()=>
    {
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
        const res=await axios.get("http://localhost:8000/currentboard/"+name)
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
        const res=await axios.get("http://localhost:8000/sportsboard/"+name)
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
        const res=await axios.get("http://localhost:8000/entertineboard/"+name)
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