import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Headbar from "../head/head";
import { useNavigate } from "react-router-dom";
const Entertine=()=>
{
    const nav=useNavigate();
    const [dat,sdata]=useState([]);
    const [scr,sscr]=useState(0);
    const [crt,scrt]=useState([]);
    const [c,sc]=useState(0);
    const[bg,sbg]=useState(-1)
    const gmail1=localStorage.gmail;
    const name1=localStorage.name;
    const Submit=async()=>
    {
        sbg(bg+1)
    }
    const Marks=async()=>
    {
       if(bg===scr)
       {
        document.getElementById(scr).innerHTML = "Submited";
        document.getElementById(scr).style.backgroundColor="white";
        document.getElementById(scr).disabled = true;
        sscr(scr+1)
       }
       const res=await axios.get("http://localhost:8000/entertineans/"+crt)       
        if(res.data.correct_answer===crt)
        {
            sc(c+1)
            scrt('');
        }
    }
    const Score=async()=>{
        const details=await axios.post("http://localhost:8000/entertineboard/"+gmail1+"/"+name1+"/"+c)
       if(details.data)
       {
        nav('/myscore')
       }
    }
    useEffect(()=>
{
    axios.get("http://localhost:8000/entertine")
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
          <input type="radio" id="none" name={teja._id}></input>
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
export default Entertine;