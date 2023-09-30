import axios from "axios";
import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Headbar from "../head/head";
const Gamep=()=>
{
    const gml=sessionStorage.gmail;
    useEffect(()=>
    {
        axios.post("http://localhost:8000/codingboard/"+gml)
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
        axios.post("http://localhost:8000/currentboard/"+gml)
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
        axios.post("http://localhost:8000/sportsboard/"+gml)
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
        axios.post("http://localhost:8000/entertineboard/"+gml)
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
        <Button className="btn1" href="/192.0809.07"><b>Coding Game</b></Button>
        <Button className="btn2" href="/192.0809.09" style={{color:'black'}}><b>Sports Game</b></Button>
        </div>
        <div className="lbtnr">
        <Button className="btn3" href="/192.0809.08"><b>Current Affair</b></Button>
        <Button className="btn4" href="/192.0809.10"><b>Entertine Game</b></Button>
        </div>
       </div>
        </>
    )
}
export default Gamep;