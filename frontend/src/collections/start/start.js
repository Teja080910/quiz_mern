import React from 'react';
import {useNavigate} from 'react-router-dom';
const Start=()=>
{
    const move=useNavigate();
    const ready=async()=>
    {
        move("/adlog");
    }
    return(
        <>
        <div className='startback'>
            <div><button className='stbtn' onClick={ready}><b>START</b></button></div>
        </div>
        </>
    )
}
export default Start;