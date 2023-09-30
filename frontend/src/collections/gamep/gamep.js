import axios from "axios";
import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Headbar from "../head/head";
const Gamep=()=>
{
    const gml=sessionStorage.gmail;
    const Coding=async()=>
    {
        sessionStorage.game="coding"
        await axios.post("https://quiz-server-1q3b.onrender.com/codingboard/"+gml)
        .then((res)=>
        {
            if(res.data) {
                sessionStorage.coding = res.data.gmail
            }
            else
            {
                sessionStorage.removeItem("coding");
                window.location="/192.0809.07";
            }
        })
        .catch((e)=>console.log(e))
    }
    const Current=async()=>
    {
        sessionStorage.game="current"
        await axios.post("https://quiz-server-1q3b.onrender.com/currentboard/"+gml)
        .then((res)=>
        {
            if (res.data) {
                sessionStorage.current = res.data.gmail
            }
            else
            {
                sessionStorage.removeItem("current")
                window.location='/192.0809.08'
            }
        })
        .catch()
    }
    const Sports=async()=>
    {
        sessionStorage.game="sports"
        await axios.post("https://quiz-server-1q3b.onrender.com/sportsboard/"+gml)
        .then((res)=>
        {
            // console.log(res)
            if (res.data) {
                sessionStorage.sports = res.data.gmail
            }
            else
            {
                sessionStorage.removeItem("sports");
                window.location="/192.0809.09"
            }
        })
        .catch()
    }
    const Entertine=async()=>
    {
        sessionStorage.game="entertine"
        await axios.post("https://quiz-server-1q3b.onrender.com/entertineboard/"+gml)
        .then((res)=>
        {
            if (res.data) {
                sessionStorage.entertine = res.data.gmail
            }
            else
            {
                sessionStorage.removeItem("entertine");
                window.location='/192.0809.10';
            }
        })
        .catch()
    }
    return(
        <>
        <Headbar/>
       <div style={{width:'100%'}}>
       <div className="lbtn">
        <Button className="btn1"  onClick={Coding}><b>Coding Game</b></Button>
        <Button className="btn2"  style={{color:'black'}} onClick={Sports}><b>Sports Game</b></Button>
        </div>
        <div className="lbtnr">
        <Button className="btn3"  onClick={Current}><b>Current Affair</b></Button>
        <Button className="btn4"  onClick={Entertine}><b>Entertine Game</b></Button>
        </div>
       </div>
        </>
    )
}
export default Gamep;