import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const Coding=()=>
{
    const [data,sdata]=useState([]);
    const [crt,scrt]=useState("");
    const [c,sc]=useState(0);
    const Marks=()=>
    {
        if(crt==="A folder of python modules")
        {
            sc(c+2);
        }
        else
        {
            sc(c-1)
        }
    }

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
                A.<button onChange={(e)=>scrt(e.target.value)} onClick={Marks}>{teja.answer1}</button><br/>
                B.<button onChange={(e)=>scrt(e.target.value)} onClick={Marks}>{teja.answer2}</button><br/>
                C.<button onChange={(e)=>scrt(e.target.value)} onClick={Marks}>{teja.answer3}</button><br/>
                D.<button onChange={(e)=>scrt(e.target.value)} onClick={Marks}>None</button>
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