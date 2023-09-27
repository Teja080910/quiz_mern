import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Headbar from "../head/head";
const Coding=()=>
{
    const nav=useNavigate();
    const [dat,sdata]=useState([]);
    const [scr,sscr]=useState(0);
    const [crt,scrt]=useState([]);
    const[i,si]=useState((1));
    const [c,sc]=useState(0);
    const[bg,sbg]=useState(-1)
    const gmail1=localStorage.gmail;
    const name1=localStorage.name;
    const Submit=async()=>
    {
        if(i===1)
        {
            sbg(bg+1)
            si(i+1)
        }
    }
    const Marks=async()=>
    {
       if(bg===scr)
       {
        document.getElementById(scr).innerHTML = "Submited";
        document.getElementById(scr).style.backgroundColor="white";
        document.getElementById(scr).disabled = true;
        sscr(scr+1)
        si(1)
       }
       const res=await axios.post("http://localhost:8000/codingans/"+crt)       
        if(res.data.correct_answer===crt)
        {
            sc(c+1)
            scrt('');
        }
    }
   const d=parseInt(c)
    const Score=async()=>{
        const details=await axios.post("http://localhost:8000/codingboard/"+gmail1+"/"+name1+"/"+d)
       if(details.data)
       {
        nav('/myscore')
       }
    }
    useEffect(()=>
{
    axios.post("http://localhost:8000/coding")
    .then((result)=>
    {
        sdata(result.data)
    })
},[])
    return(
        <>
        <Headbar/>
        <div className="gameback">
        <div className="scorebord"><h3>Your Score::{}</h3></div>
        <div className="gamebord">
         <div>
      {dat.map((teja, index) => (
        <div key={index}>
            <p><b>{index+1}.{teja.question}</b></p>
            
          <input type="radio" id="answer1" name={teja._id} onChange={(e) =>scrt(teja.answer1)} onClick={Submit}></input>
          <label>{teja.answer1}</label><br></br>
          <input type="radio" id="answer2" name={teja._id} onChange={(e) =>scrt(teja.answer2)} onClick={Submit}></input>
          <label>{teja.answer2}</label><br></br>
          <input type="radio" id="answer3" name={teja._id} onChange={(e) =>scrt(teja.answer3)} onClick={Submit}></input>
          <label>{teja.answer3}</label><br></br>
          <input type="radio" id="none" name={teja._id} onClick={Submit}></input>
          <label>None</label><br></br>
          <button id={index} style={{backgroundColor:"green",marginLeft:"40%",cursor:'pointer'}} type="submit" onClick={Marks}>submit</button>
        </div>
      ))}
    </div>
    <div><button style={{backgroundColor:'yellow',width:'15vh',height:'7vh',margin:"2% 0% 2% 36%"}} onClick={Score}>Score</button></div>
        </div>
        </div>
        </>
    )
}
export default Coding;