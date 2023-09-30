import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Headbar from "./head/head";
const Coding=()=>
{
    const nav=useNavigate();
    const [dat,sdata]=useState([]);
    const [scr,sscr]=useState([]);
    const [crt,scrt]=useState([]);
    // const[i,si]=useState((0));
    const [c,sc]=useState(0);
    const[bg,sbg]=useState(-1)
    const gmail1=sessionStorage.gmail;
    const name1=sessionStorage.name;
    // const Submit=async()=>
    // {
    //     if(i===1)
    //     {
    //         sbg(bg+1)
    //         si(i+1)
    //     }
    // }
    var i=0;
    const Marks=async()=>
    {
        {
            dat.map((teja1)=>(
                <div>
                    .then(({teja1._id}===1))
                    {
                        document.getElementById(teja1._id).style.backgroundColor="white "
                    }
                </div>
            ))
          }
        // while(i<bg)
        // {
        //     sscr(i)
        //     document.getElementById(7).style.backgroundColor="white";
        //     i++;
        //     sscr(i)
        // }
    //    if(bg===scr)
    //    {
    //     document.getElementById(scr).innerHTML = "Submited";
    //     document.getElementById(scr).style.backgroundColor="white";
    //     document.getElementById(scr).disabled = true;
    //     sscr(scr+1)
    //     si(1)
    //    }
       const res=await axios.post("https://quiz-server-1q3b.onrender.com/codingans/"+crt)       
        if(res.data.correct_answer===crt)
        {
            sc(c+2)
            scrt('');
        }
        else
        {
            sc(c-1)
        }
    }
    const Score=async()=>{
        const details=await axios.post("https://quiz-server-1q3b.onrender.com/codingboard/"+gmail1+"/"+name1+"/"+c)
       if(details.data)
       {
        nav('/192.0809.14')
       }
    }
    useEffect(()=>
{
    axios.post("https://quiz-server-1q3b.onrender.com/coding")
    .then((result)=>
    {
        sdata(result.data)
        sbg(result.data.length)
        console.log(result.data.length)
       
    })
},[])
    return(
        <>
        <Headbar/>
        <div className="gameback">
        <div className="scorebord"><h3>Your Score::{}</h3></div>
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
          <button id={teja._id} name={teja._id} style={{backgroundColor:"green",marginLeft:"40%",cursor:'pointer'}} type="submit" onClick={Marks}>submit</button>
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












// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// const Photo=()=>
// {
//     // const [images, simages] = useState([]);
//     const[data,sdata]=useState([]);
//     // const Upload=async()=>
//     // {
//     //     const res=await axios.post("https://quiz-server-1q3b.onrender.com/currentans/"+images)
//     //     if(res.data)
//     //     {
//     //         alert("insert")
//     //     }
//     // }
//     useEffect(()=>
//     {
//         axios.post("https://quiz-server-1q3b.onrender.com/currentans")
//         .then((result)=>
//         {
//             console.log(result.data)
//             sdata(result.data)
//         })
//     },[])
//     return(
//         <>
//         <div className='post'>
//         {
//             data.map((teja)=>(
//                 <p>{teja.correct_answer}</p>
//             ))}
//         </div>
//         </>
//     )
// }
// export default Photo;