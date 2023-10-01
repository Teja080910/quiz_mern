import axios from "axios";
import React, { useState } from "react";
const Gameupdate=()=>{
    const [id,sid]=useState("");
    const [ques,sques]=useState("");
    const [ans,sans]=useState([]);
    const [ans1,sans1]=useState('');
    const [ans2,sans2]=useState('');
    const [ans3,sans3]=useState('');
    const [ans4,sans4]=useState('');
    const codingans=async()=>
    {
        await axios.post("https://quiz-server-1q3b.onrender.com/codingans/"+ans4);
        alert("sucessfully insert")
    }
    const currentans=async()=>
    {
        await axios.post("https://quiz-server-1q3b.onrender.com/currentans/"+ans4);
        alert("sucessfully insert")
    }
    const sportsans=async()=>
    {
        await axios.post("https://quiz-server-1q3b.onrender.com/sportsans/"+ans4);
        alert("sucessfully insert")
    }
    const entertineans=async()=>
    {
        await axios.post("https://quiz-server-1q3b.onrender.com/entertineans/"+ans4);
        alert("sucessfully insert")
    }
    const coding=async()=>{
        const result=await axios.post("https://quiz-server-1q3b.onrender.com/coding/"+ques)
        if(result.data)
        {
            // console.log(result.data)
            sans(result.data)
        }
        else
        {
            alert("not found")
        }
    }
    const sports=async()=>{
        const result=await axios.post("https://quiz-server-1q3b.onrender.com/sports/"+id)
        if(result.data)
        {
            alert("question already exist")
        }
        else
        {
            axios.post("https://quiz-server-1q3b.onrender.com/delsports")
            .then((res)=>
            {
                console.log("delete sports score")
            })
        await axios.post("https://quiz-server-1q3b.onrender.com/sports/"+id+"/"+ans1+"/"+ans2+"/"+ans3);
        alert("sucessfully insert")
        }
    }
    const current=async()=>{
        const result=await axios.post("https://quiz-server-1q3b.onrender.com/current/"+ques)
        if(result.data)
        {
            alert("question already exist")
        }
        else
        {
        axios.post("https://quiz-server-1q3b.onrender.com/delcurrent")
        .then((res)=>
        {
            console.log("delete current score")
        })
        await axios.post("https://quiz-server-1q3b.onrender.com/current/"+ques+"/"+ans1+"/"+ans2+"/"+ans3);
        alert("sucessfully insert")
        }
    }
    const entertine=async()=>{
        const result=await axios.post("https://quiz-server-1q3b.onrender.com/entertine/"+id)
        if(result.data)
        {
            alert("question already exist")
        }
        else
        {
            axios.post("https://quiz-server-1q3b.onrender.com/delentertine")
        .then((res)=>
        {
            console.log("delete entertine score")
        })
         const responce=await axios.post("https://quiz-server-1q3b.onrender.com/entertine/"+id+"/"+ans1+"/"+ans2+"/"+ans3);
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
        <input type="text" name="answer" placeholder="Enter answer 1" value={ans.answer1} onChange={(e)=>sans1(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 2" value={ans.answer2} onChange={(e)=>sans2(e.target.value)}></input><br></br>
        <input type="text" name="answer" placeholder="Enter answer 3" value={ans.answer3} onChange={(e)=>sans3(e.target.value)}></input><br></br>
        <button onClick={coding}>insert</button><br></br>
        Choose Answer<select onChange={(e)=>sans4(e.target.value)}>
            <option value={ans.answer1}>{ans.answer1}</option>
            <option value={ans.answer2}>{ans.answer2}</option>
            <option value={ans.answer3}>{ans.answer3}</option>
        </select>
        <br></br>
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
        <select onChange={(e)=>sans4(e.target.value)}> Choose Answer
            <option>{ans1}</option>
            <option>{ans2}</option>
            <option>{ans3}</option>
        </select>
        <br></br>
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
        <select onChange={(e)=>sans4(e.target.value)}> Choose Answer
            <option>{ans1}</option>
            <option>{ans2}</option>
            <option>{ans3}</option>
        </select>
        <br></br>
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
        <select onChange={(e)=>sans4(e.target.value)}> Choose Answer
            <option>{ans1}</option>
            <option>{ans2}</option>
            <option>{ans3}</option>
        </select>
        <br></br>
        <button onClick={entertineans}>insert</button>
        </div>
        </div>
        </>
    )
}
export default Gameupdate;
