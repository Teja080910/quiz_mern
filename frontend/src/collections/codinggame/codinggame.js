import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Headbar from "../head/head";
import { useNavigate } from "react-router-dom";
const Coding=()=>
{
    const nav=useNavigate();
    const [dat,sdata]=useState([]);
    const [dat1,sdat]=useState([]);
    const [crt,scrt]=useState([]);
    const [c,sc]=useState(0);
    const[bg,sbg]=useState('green')
    const gmail1=localStorage.gmail;
    const name1=localStorage.name;
    const Marks=async()=>
    {
        const res1=await axios.get("http://localhost:8000/coding")      
        const size=res1.data.length 
        console.log(crt);
        const res2=await axios.get("http://localhost:8000/coding/"+crt)
        console.log(res2.data)                                                
        console.log(size)
        var i;
        while(i<size)
        {
            const res2=await axios.get("http://localhost:8000/coding/"+crt)
            console.log(res2.data)
            if(res2.data)
            {
                document.getElementById(i).style.backgroundColor="red";
                i=i+1;
            }
            // document.getElementById(i).style.backgroundColor="green";
        }
       const res=await axios.get("http://localhost:8000/codingans/"+crt)       
       console.log(res.data.correct_answer)
        if(res.data.correct_answer===crt)
        {
            sc(c+1)
            scrt('');
            sdat("ok")
        }
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
          <button id={index} onChange={(e)=>scrt(teja.question)} style={{backgroundColor:bg,marginLeft:"40%",cursor:'pointer'}} type="submit" onClick={Marks}>submit{dat1}</button>
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