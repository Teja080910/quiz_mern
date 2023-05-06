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
        if(res.data===crt)
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
    })
    .catch((err)=>console.log(err))
},[])
    return(
        <>
        <div className="gameback">
        <div className="scorebord"><h3>Your Score::{c}</h3></div>
        <div className="gamebord">
        {
            dat.map((teja)=>{
               return(
                <>
                <p><b>=> {teja.question}</b></p>
                A.<button onChange={(e)=>scrt(teja.answer1)} onClick={Marks}>{teja.answer1}</button><br/>
                B.<button onChange={(e)=>scrt(teja.answer2)} onClick={Marks}>{teja.answer2}</button><br/>
                C.<button onChange={(e)=>scrt(teja.answer3)} onClick={Marks}>{teja.answer3}</button><br/>
                D.<button  onClick={Marks}>None</button>
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