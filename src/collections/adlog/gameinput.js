import React from "react";
import { useState } from "react";
import axios from "axios";
const Gameinput=()=>{
    const [id,sid]=useState("");
    const [ques,sques]=useState("");
    const [ans1,sans1]=useState('');
    const [ans2,sans2]=useState('');
    const [ans3,sans3]=useState('');
    const [ans4,sans4]=useState('');
    const codingans=async()=>
    {
        await axios.post("http://localhost:8000/codingans/"+ans4);
        alert("sucessfully insert")
    }
    const currentans=async()=>
    {
        await axios.post("http://localhost:8000/currentans/"+ans4);
        alert("sucessfully insert")
    }
    const sportsans=async()=>
    {
        await axios.post("http://localhost:8000/sportsans/"+ans4);
        alert("sucessfully insert")
    }
    const entertineans=async()=>
    {
        await axios.post("http://localhost:8000/entertineans/"+ans4);
        alert("sucessfully insert")
    }
    const coding=async()=>{
        const result=await axios.get("http://localhost:8000/coding/"+ques)
        if(result.data)
        {
            alert("question already exist")
        }
        else
        {
            axios.get("http://localhost:8000/delcoding")
            .then((res)=>
            {
                console.log("delete coding score")
            })
        await axios.post("http://localhost:8000/coding/"+ques+"/"+ans1+"/"+ans2+"/"+ans3);
        alert("sucessfully insert")
        }
    }
    const sports=async()=>{
        const result=await axios.get("http://localhost:8000/sports/"+id)
        if(result.data)
        {
            alert("question already exist")
        }
        else
        {
            axios.get("http://localhost:8000/delsports")
            .then((res)=>
            {
                console.log("delete sports score")
            })
        await axios.post("http://localhost:8000/sports/"+id+"/"+ans1+"/"+ans2+"/"+ans3);
        alert("sucessfully insert")
        }
    }
    const current=async()=>{
        const result=await axios.get("http://localhost:8000/current/"+ques)
        if(result.data)
        {
            alert("question already exist")
        }
        else
        {
        axios.get("http://localhost:8000/delcurrent")
        .then((res)=>
        {
            console.log("delete current score")
        })
        await axios.post("http://localhost:8000/current/"+ques+"/"+ans1+"/"+ans2+"/"+ans3);
        alert("sucessfully insert")
        }
    }
    const entertine=async()=>{
        const result=await axios.get("http://localhost:8000/entertine/"+id)
        if(result.data)
        {
            alert("question already exist")
        }
        else
        {
            axios.get("http://localhost:8000/delentertine")
        .then((res)=>
        {
            console.log("delete entertine score")
        })
         const responce=await axios.post("http://localhost:8000/entertine/"+id+"/"+ans1+"/"+ans2+"/"+ans3);
        console.log(responce.data);
        alert("sucessfully insert")
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
        <button onClick={coding}>insert</button><br></br>
        <input type="text" name="correc_answer" placeholder="Enter coorect answer" onChange={(e)=>sans4(e.target.value)}></input><br></br>
        <button onClick={codingans}>insert</button>
        </div>
        <div className="inputback">
        <h2>Sports data</h2>
        <input type="number" name="id" placeholder="enter id" onChange={(e)=>sid(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer 1" onChange={(e)=>sans1(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 2" onChange={(e)=>sans2(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 3" onChange={(e)=>sans3(e.target.value)}></input><br></br>
        <button onClick={sports}>insert</button><br></br>
        <input type="text" name="correc_answer" placeholder="Enter coorect answer" onChange={(e)=>sans4(e.target.value)}></input><br></br>
        <button onClick={sportsans}>insert</button>
        </div>
        <div className="inputback">
        <h2>Current Affair data</h2>
        <input type="text" name="ques" placeholder="enter question" onChange={(e)=>sques(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer 1" onChange={(e)=>sans1(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 2" onChange={(e)=>sans2(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 3" onChange={(e)=>sans3(e.target.value)}></input><br></br>
        <button onClick={current}>insert</button><br></br>
        <input type="text" name="correc_answer" placeholder="Enter coorect answer" onChange={(e)=>sans4(e.target.value)}></input><br></br>
        <button onClick={currentans}>insert</button>
        </div> 
        <div className="inputback">
        <h2>Entertinment data</h2>
        <input type="number" name="question" placeholder="enter id" onChange={(e)=>sid(e.target.value)}></input>
        <br></br>
        <input type="text" name="answer" placeholder="Enter answer 1" onChange={(e)=>sans1(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 2" onChange={(e)=>sans2(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 3" onChange={(e)=>sans3(e.target.value)}></input><br></br>
        <button onClick={entertine}>insert</button><br></br>
        <input type="text" name="correc_answer" placeholder="Enter coorect answer" onChange={(e)=>sans4(e.target.value)}></input><br></br>
        <button onClick={entertineans}>insert</button>
        </div>
        </div>
        </>
    )
}
export default Gameinput;
