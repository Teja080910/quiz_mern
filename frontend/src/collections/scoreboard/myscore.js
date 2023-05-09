import React from 'react';
import Headbar from '../head/head';
import Sbord from './scoreboard';
import { useNavigate } from 'react-router-dom';
const Myscore=()=>
{
    const nav=useNavigate();
    const Lbord=async()=>
    {
        nav('/leaderboard')
    }
    const Gpage=async()=>
    {
        nav('/gamep')
    }
    return(
        <>
        <Headbar/>
        <div className='gameback'>
        <Sbord/>
        <div className='myscore'>
            <h3>SUCCESSFULLY</h3>
            <h4>COMPLETED</h4>
            <button style={{border:'none',backgroundColor:'wheat',height:'40px'}} onClick={Gpage}><b>Games Page</b></button>
            <button style={{marginLeft:'30%',border:'none',backgroundColor:'wheat',height:'40px'}} onClick={Lbord}><b>Leaderboard</b></button>
        </div>
        </div>
        </>
    )
}
export default Myscore;