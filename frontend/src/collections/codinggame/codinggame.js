import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const Coding=()=>
{
    const [data,sdata]=useState([]);
    const [crt,scrt]=useState([]);
    useEffect(()=>
{
    axios.get("http://localhost:8000/coding")
    .then((result)=>
    {
        console.log(result.data)
        sdata(result.data)
    })
    .catch((err)=>console.log(err))
},[])
    return(
        <>
        <div className="gameback">
        <div className="scorebord"></div>
        <div className="gamebord">
        {
            data.map((teja)=>{
               return(
                <>
                <p><b>=> {teja.question}</b></p>
                A.<input type="radio" value="A folder of python modules" onChange={(e)=>scrt(e.target.value)} >{teja.answer1}</input><br/>
                B.<input type="radio" value="A folder of python modules" onChange={(e)=>scrt(e.target.value)} >{teja.answer2}</input><br/>
                C.<input type="radio" value="A folder of python modules" onChange={(e)=>scrt(e.target.value)} >{teja.answer3}</input><br/>
                D.<button>None</button>
                </>
               )
            })
        }
        </div>
        </div>
        </>
    )
}
export default Coding;