import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Headbar from "../head/head";
import { useNavigate } from "react-router-dom";
const Coding=()=>
{
    const nav=useNavigate();
    const [dat,sdata]=useState([]);
    const [scr,sscr]=useState(0);
    const [crt,scrt]=useState([]);
    const [c,sc]=useState(0);
    const[bg,sbg]=useState('green')
    const gmail1=localStorage.gmail;
    const name1=localStorage.name;
    const Marks=async()=>
    {
        // document.getElementById(scr).style.backgroundColor="red";
        document.getElementById(scr).innerHTML = "Submited";
        document.getElementById(scr).style.backgroundColor="grey";

        document.getElementById(scr).disabled = true;


        sscr(scr+1)
       const res=await axios.get("http://localhost:8000/codingans/"+crt)       
       console.log(res.data.correct_answer)
        if(res.data.correct_answer===crt)
        {
            sc(c+1)
            scrt('');
        }
        console.log(res.data.length)
    }
    const Score=async()=>{
        const details=await axios.post("http://localhost:8000/codingboard/"+gmail1+"/"+name1+"/"+c)
        console.log(details.data);
       nav('/myscore')
    }
    useEffect(()=>
{
    axios.get("http://localhost:8000/coding")
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
            
          <input type="radio" id="answer1" name={teja._id} onChange={(e) =>scrt(teja.answer1)} ></input>
          <label>{teja.answer1}</label><br></br>
          <input type="radio" id="answer2" name={teja._id} onChange={(e) =>scrt(teja.answer2)} ></input>
          <label>{teja.answer2}</label><br></br>
          <input type="radio" id="answer3" name={teja._id} onChange={(e) =>scrt(teja.answer3)} ></input>
          <label>{teja.answer3}</label><br></br>
          <input type="radio" id="none" name={teja._id}></input>
          <label>None</label><br></br>
          <button key={index} id={index} style={{backgroundColor:bg,marginLeft:"40%",cursor:'pointer'}} type="submit" onClick={Marks}>submit</button>
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