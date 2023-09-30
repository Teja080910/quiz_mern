import axios from "axios";
import React, { useState } from "react";
const Sbord=()=>
{
    const[c,sc]=useState('');
    const name=localStorage.gmail;
    const game=sessionStorage.game;
    if(game==="coding")
    {
    axios.post("https://quiz-server-1q3b.onrender.com/codingboard/"+name)
    .then((res1)=>
    {
       sc(res1.data.score)
    })
    .catch((err)=>console.log(err))
    }
    else if(game==="current")
   {
    axios.post("https://quiz-server-1q3b.onrender.com/currentboard/"+name)
    .then((res2)=>
    {
       sc(res2.data.score)
    })
    .catch((err)=>console.log(err))
   }
   else if(game==="sports")
   {
    axios.post("https://quiz-server-1q3b.onrender.com/sportsboard/"+name)
    .then((res3)=>
    {
       sc(res3.data.score)
    })
    .catch((err)=>console.log(err))
   }
   else
   {
    axios.post("https://quiz-server-1q3b.onrender.com/entertineboard/"+name)
    .then((res4)=>
    {
       sc(res4.data.score)
    })
    .catch((err)=>console.log(err))
   }
    return(
        <table className="scorebord">
            <tr>
                <td><h3>Your Score::{c}</h3></td>
            </tr>
        </table>
    )
}
export default Sbord;