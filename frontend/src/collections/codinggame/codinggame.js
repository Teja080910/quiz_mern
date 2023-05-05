import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Coding=()=>
{
    const [data,sdata]=useState([]);
    const [err,serr]=useState([]);
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
                <p> 1) {teja.question}</p>
                <p>{teja.answer}</p>
                <p><b>Teja</b></p>
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