import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import Headbar from "../head/head";
const Current=()=>
{
    const nav=useNavigate();
    const [dat,sdata]=useState([]);
    const [crt,scrt]=useState([]);
    const [c,sc]=useState(0);
    const[bg,sbg]=useState(-1);
    const gmail1=sessionStorage.gmail;
    const name1=sessionStorage.name;
    const Marks=async()=>
    {
        if(typeof(crt)!=="object")
        {
            document.getElementById(bg.question).innerHTML = "Submited";
            document.getElementById(bg.question).style.backgroundColor="white";
            document.getElementById(bg.question).disabled = true;
        }
       const res=await axios.post("https://quiz-server-1q3b.onrender.com/currentcheckans/"+crt)
        if(res.data.correct_answer===crt)
        {
            sc(c+1)
        }
        scrt([]);
    }
    const Score=async()=>{
        const details=await axios.post("https://quiz-server-1q3b.onrender.com/currentboard/"+gmail1+"/"+name1+"/"+c)
       if(details.data)
       {
        nav('/192.0809.14')
       }
    }
    useEffect(()=>
{
    axios.post("https://quiz-server-1q3b.onrender.com/current")
    .then((result)=>
    {
        sdata(result.data)
    })
},[])
    return(
        <>
        <Headbar/>
        <div className="gameback">
        <div className="scorebord"><h3>Your Score::{0}</h3></div>
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
          <input type="radio" id="none" name={teja._id} ></input>
          <label>None</label><br></br>
          <button id={teja.question} style={{backgroundColor:'green',marginLeft:"40%",cursor:'pointer'}} type="submit" onClick={Marks} onClickCapture={(s)=>{sbg(teja)}}>submit</button>
        </div>
      ))}
    </div>
    <div><Button style={{backgroundColor:'orange',width:'15vh',height:'5vh',margin:"2% 0% 2% 36%"}} onClick={Score}>Score</Button></div>
        </div>
        </div>
        </>
    )
}
export default Current;