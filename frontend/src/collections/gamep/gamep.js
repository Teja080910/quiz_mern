import axios from "axios";
import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Headbar from "../head/head";
const Gamep=()=>
{
    const gml=sessionStorage.gmail;
    useEffect(()=>
    {
        axios.post("https://quiz-server-1q3b.onrender.com/codingboard/"+gml)
        .then((res)=>
        {
            if (res) {
                sessionStorage.coding = res.data.gmail
            }
            else
            {
                sessionStorage.removeItem("coding");
            }
        })
        .catch()
        axios.post("https://quiz-server-1q3b.onrender.com/currentboard/"+gml)
        .then((res)=>
        {
            if (res.data) {
                sessionStorage.current = res.data.gmail
            }
            else
            {
                sessionStorage.removeItem("current")
            }
        })
        .catch()
        axios.post("https://quiz-server-1q3b.onrender.com/sportsboard/"+gml)
        .then((res)=>
        {
            if (res.data) {
                sessionStorage.sports = res.data.gmail
            }
            else
            {
                sessionStorage.removeItem("sports");
            }
        })
        .catch()
        axios.post("https://quiz-server-1q3b.onrender.com/entertineboard/"+gml)
        .then((res)=>
        {
            if (res.data) {
                sessionStorage.entertine = res.data.gmail
            }
            else
            {
                sessionStorage.removeItem("entertine");
            }
        })
        .catch()
    })
    return(
        <>
        <Headbar/>
       <div style={{width:'100%'}}>
       <div className="lbtn">
        <Button className="btn1" href="/192.0809.07" onClick={(e)=>{sessionStorage.game="coding"}}><b>Coding Game</b></Button>
        <Button className="btn2" href="/192.0809.09" style={{color:'black'}} onClick={(e)=>{sessionStorage.game="sports"}}><b>Sports Game</b></Button>
        </div>
        <div className="lbtnr">
        <Button className="btn3" href="/192.0809.08" onClick={(e)=>{sessionStorage.game="current"}}><b>Current Affair</b></Button>
        <Button className="btn4" href="/192.0809.10" onClick={(e)=>{sessionStorage.game="entertine"}}><b>Entertine Game</b></Button>
        </div>
       </div>
        </>
    )
}
export default Gamep;