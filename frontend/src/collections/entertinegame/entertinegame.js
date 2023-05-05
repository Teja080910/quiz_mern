import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const Entertine=()=>
{
    const [data,sdata]=useState([]);
    useEffect(()=>
{
    axios.get("http://localhost:8000/entertine")
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
                A.<button>{teja.answer1}</button><br/>
                B.<button>{teja.answer2}</button><br/>
                C.<button>{teja.answer3}</button><br/>
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
export default Entertine;