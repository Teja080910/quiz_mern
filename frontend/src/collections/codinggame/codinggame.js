import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const Coding=()=>
{
    const [dat,sdata]=useState([]);
    const [crt,scrt]=useState("");
    const [c,sc]=useState(0);
    const [err,serr]=useState("");
    const Marks=async()=>
    {
        const res=await axios.get("http://localhost:8000/codingansw/"+crt)
        console.log(res)
        if(res.data)
        {
            sc(c+1);
        }
        else
        {
            serr("Wrong answer")
        }
    }

    useEffect(()=>
{
    axios.get("http://localhost:8000/coding")
    .then((result)=>
    {
        sdata(result.data)
        // console.log(result.data[0].question)
    })
    .catch((err)=>console.log(err))
},[])
    return(
        <>
        <div className="gameback">
        <div className="scorebord"><h3>Your Score::{c}</h3></div>
        <div className="gamebord">
        {/* {
            dat.map((teja)=>{
               return(
                <>
               <div>
               <p><b>=> {teja.question}</b></p>
                <input onChange={(e)=>scrt(teja.answer1)} >{teja.answer1}</input ><br/>
                <input  onChange={(e)=>scrt(teja.answer2)}>{teja.answer2}</input ><br/>
                <input  onChange={(e)=>scrt(teja.answer3)}>{teja.answer3}</input ><br/>
                <input   onClick={Marks}>None</input>
               </div>
               
                </>
               )
            })
        } */}
         <div>
      {dat.map((teja, index) => (
        <div key={index}>
          <label>{item.label}</label>
          <input type="text" value={item.value} onChange={(event) => handleInputChange(event, index)} />
        </div>
      ))}
    </div>
        </div>
        </div>
        </>
    )
}
export default Coding;