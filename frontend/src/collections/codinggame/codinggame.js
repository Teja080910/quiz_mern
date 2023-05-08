import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Headbar from "../head/head";
import { useNavigate } from "react-router-dom";
const Coding=()=>
{
    const nav=useNavigate();
    const [dat,sdata]=useState([]);
    const [crt,scrt]=useState([]);
    const [c,sc]=useState(1);
    const name1=localStorage.name;
    const Marks=async()=>
    {
       const res=await axios.get("http://localhost:8000/codingans/"+crt)
       console.log(res.data.correct_answer)
        if(res.data.correct_answer===crt)
        {
            sc(c+1)
            scrt('');
            localStorage.score=c;
        }
    }
    const Score=async()=>{
        const details=await axios.post("http://localhost:8000/leaderboard/"+name1+"/"+c)
        console.log(details.data);
       nav('/myscore')
    }
    useEffect(()=>
{
    axios.get("http://localhost:8000/coding")
    .then((result)=>
    {
        console.log(result.data[2].answer1)
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
          <input type="radio" id="none" name={teja._id}></input>
          <label>None</label><br></br>
          <button  type="submit" onClick={Marks}>submit</button>
        </div>
      ))}
    </div>
    <div><button onClick={Score}>Score</button></div>
        </div>
        </div>
        </>
    )
}
export default Coding;