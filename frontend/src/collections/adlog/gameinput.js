import React from "react";
import { useState } from "react";
import axios from "axios";
const Gameinput=()=>{
    const [id,sid]=useState("");
    const [ques,sques]=useState("");
    const [ans1,sans1]=useState('');
    const [ans2,sans2]=useState('');
    const [ans3,sans3]=useState('');
    const coding=async()=>{
        const result=await axios.get("http://localhost:8000/coding/"+ques)
        if(result.data)
        {
            alert("question already exist")
        }
        else
        {
            const responce=await axios.post("http://localhost:8000/coding/"+ques+"/"+ans1+"/"+ans2+"/"+ans3);
        console.log(responce.data);
        alert("sucessfully insert")
        }
    }
    const sports=async()=>{
        const result=await axios.get("http://localhost:8000/sports/"+ques)
        if(result.data)
        {
            alert("question already exist")
        }
        else
        {
            const responce=await axios.post("http://localhost:8000/sports/"+id+"/"+ans1+"/"+ans2+"/"+ans3);
        console.log(responce.data);
        alert("sucessfully insert")
        }
    }
    const current=async()=>{
        const result=await axios.get("http://localhost:8000/coding/"+ques)
        if(result.data)
        {
            const responce=await axios.post("http://localhost:8000/current/"+ques+"/"+ans1+"/"+ans2+"/"+ans3);
        console.log(responce.data);
        alert("sucessfully insert")
        }
        else
        {
            alert("question already exist")
        }
    }
    const entertine=async()=>{
        const result=await axios.get("http://localhost:8000/coding/"+ques)
        if(result.data)
        {
            const responce=await axios.post("http://localhost:8000/entertine/"+id+"/"+ans1+"/"+ans2+"/"+ans3);
        console.log(responce.data);
        alert("sucessfully insert")
        }
        else
        {
            alert("question already exist")
        }
    }
    return(
        <>
        <div style={{backgroundColor:"aqua",marginTop:'-2%',height:'100vh',overflow:'scroll'}}>
        <div className="inputback">
        <h2>Coding data</h2>
        <input type="text" name="ques" placeholder="enter question" onChange={(e)=>sques(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer 1" onChange={(e)=>sans1(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 2" onChange={(e)=>sans2(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 3" onChange={(e)=>sans3(e.target.value)}></input><br></br>
        <button onClick={coding}>insert</button>
        </div>
        <div className="inputback">
        <h2>Sports data</h2>
        <input type="number" name="id" placeholder="enter id" onChange={(e)=>sid(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer 1" onChange={(e)=>sans1(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 2" onChange={(e)=>sans2(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 3" onChange={(e)=>sans3(e.target.value)}></input><br></br>
        <button onClick={sports}>insert</button>
        </div>
        <div className="inputback">
        <h2>Current Affair data</h2>
        <input type="text" name="ques" placeholder="enter question" onChange={(e)=>sques(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer 1" onChange={(e)=>sans1(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 2" onChange={(e)=>sans2(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 3" onChange={(e)=>sans3(e.target.value)}></input><br></br>
        <button onClick={current}>insert</button>
        </div> 
        <div className="inputback">
        <h2>Entertinment data</h2>
        <input type="number" name="question" placeholder="enter id" onChange={(e)=>sid(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer 1" onChange={(e)=>sans1(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 2" onChange={(e)=>sans2(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 3" onChange={(e)=>sans3(e.target.value)}></input><br></br>
        <button onClick={entertine}>insert</button>
        </div>
        </div>
        </>
    )
}
export default Gameinput;
