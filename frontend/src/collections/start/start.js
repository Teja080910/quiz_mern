import React from 'react';
import { useNavigate } from 'react-router-dom';
import Headbar from '../head/head';
const Start=()=>
{
    var a=5;
    console.log(a+"3");
    const move=useNavigate();
    const ready=async()=>
    {
        move("/192.0809.00")
    }
    return(
        <>
        <Headbar/>
        <div className='startback'>
            <div><button className='stbtn' onClick={ready}><b>START</b></button></div>
        </div>
        </>
    )
}
export default Start;