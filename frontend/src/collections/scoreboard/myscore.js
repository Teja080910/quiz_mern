import React from 'react';
import { useNavigate } from 'react-router-dom';
import Headbar from '../head/head';
import Sbord from './scoreboard';
const Myscore=()=>
{
    const nav=useNavigate();
    const Lbord=async()=>
    {
        nav('/192.0809.15')
    }
    const Gpage=async()=>
    {
        nav('/192.0809.06')
    }
    return(
        <>
        <Headbar/>
        <div className='gameback'>
        <Sbord/>
                <div className='myscore'>
                    <h3 style={{marginTop:'5vh', justifyContent:'space-between'}}>SUCCESSFULLY</h3>
                    <h4>COMPLETED</h4>
                    <div style={{justifyContent:'space-around'}}>
                    <button className='btn btn-light' onClick={Gpage}><b>Games Page</b></button>
                    <button className='btn btn-light' onClick={Lbord}><b>Leaderboard</b></button>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Myscore;