import React from "react";
import axios from "axios";
import { useState } from "react";
const Sbord=()=>
{
    const[c,sc]=useState('');
    const name=localStorage.gmail;
    axios.get("http://localhost:8000/codingboard/"+name)
    .then((res1)=>
    {
       sc(res1.data.score)
    })
    .catch((err)=>console.log(err))
    axios.get("http://localhost:8000/currentboard/"+name)
    .then((res2)=>
    {
       sc(res2.data.score)
    })
    .catch((err)=>console.log(err))
    axios.get("http://localhost:8000/sportsboard/"+name)
    .then((res3)=>
    {
       sc(res3.data.score)
    })
    .catch((err)=>console.log(err))
    axios.get("http://localhost:8000/entertineboard/"+name)
    .then((res4)=>
    {
       sc(res4.data.score)
    })
    .catch((err)=>console.log(err))
    // const sc=localStorage.score;
    return(
        <table className="scorebord">
            <tr>
                <td><h3>Your Score::{c}</h3></td>
            </tr>
        </table>
    )
}
export default Sbord;