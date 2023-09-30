import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Headbar from '../head/head';
import Sbord from './scoreboard';
const Leader=()=>
{
    const[data,sdata]=useState([]);
    useEffect(()=>
    {
        const game=sessionStorage.game;
        if(game==="coding")
        {
            axios.post("https://quiz-server-1q3b.onrender.com/codingboard")
            .then((res)=>
        {
            sdata(res.data.sort((a,b)=>b.score-a.score))
        })
        .catch()
        }
        else if(game==="current")
        {
            axios.post("https://quiz-server-1q3b.onrender.com/currentboard")
            .then((res)=>
        {
            sdata(res.data.sort((a,b)=>b.score-a.score))
        })
        .catch((err)=>console.log(err))
        }
        else if(game==="sports")
        {
            axios.post("https://quiz-server-1q3b.onrender.com/sportsboard")
            .then((res)=>
        {
            sdata(res.data.sort((a,b)=>b.score-a.score))
        })
        .catch((err)=>console.log(err))
        }
        else if(game==="entertine")
        {
            axios.post("https://quiz-server-1q3b.onrender.com/entertineboard")
            .then((res)=>
        {
            sdata(res.data.sort((a,b)=>b.score-a.score))
        })
        .catch((err)=>console.log(err))
        }
    },[])
    return(
        <>
        <Headbar/>
        <div className='gameback'>
        <Sbord/>    
        <table className='leaderbord'>
            <tr>
                <td colSpan={3}><h1 style={{color:'darkgreen'}}>Leaderboard</h1></td>
            </tr>
            <tr style={{color:'green',backgroundColor:'lightblue'}}>
                <th><b>RANK</b></th>
                <th><b>SCORE</b></th>
                <th><b>NAME</b></th>
            </tr>
        {
            data.map((teja,index)=>(
                
                        <tr>
                            <td style={{backgroundColor:'rgb(255, 96, 48)'}}><b>{index+1}</b></td>
                            <td style={{backgroundColor:'white'}}><b>{parseInt(teja.score)}</b></td>
                            <td style={{backgroundColor:'green'}}><b>{teja.name}</b></td>
                        </tr>
            ))
        }
        </table>
        </div>
        </>
    )
}
export default Leader;