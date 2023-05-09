import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import Headbar from '../head/head';
import Sbord from './scoreboard';
const Leader=()=>
{
    const[data,sdata]=useState([]);
    useEffect(()=>
    {
        axios.get("http://localhost:8000/codingboard")
        .then((res)=>
        {
            // console.log(res.data.sort().reverse())
            sdata(res.data.sort().reverse())
        })
        .catch((err)=>console.log(err))
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
                            <td style={{backgroundColor:'white'}}><b>{teja.score}</b></td>
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