import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const Sports=()=>
{
    const i = 1;
    const [dat,sdata]=useState([]);
    const [crt,scrt]=useState([]);
    const [c,sc]=useState(0);
    const Marks=async()=>
    {
       const res=await axios.get("http://localhost:8000/sportsans/"+crt)
        console.log(crt)
        if(res.data && i===1)
        {
            i=i+1;
            sc(c+1)
        }
        else{
            // alert("Sorry No answer found")
        }
    }

    useEffect(()=>
{
    axios.get("http://localhost:8000/sports")
    .then((result)=>
    {
        sdata(result.data)
    })
},[])
    return(
        <>
        <div className="gameback">
        <div className="scorebord"><h3>Your Score::{c}</h3></div>
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
        </div>
        </div>
        </>
    )
}
export default Sports;