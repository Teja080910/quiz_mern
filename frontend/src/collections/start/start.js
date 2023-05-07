import React from 'react';
import {useNavigate} from 'react-router-dom';
import Headbar1 from '../head/head1';
const Start=()=>
{
    const move=useNavigate();
    const ready=async()=>
    {
        localStorage.name=" ";
        window.location.href(move("/adlog"));
        window.location.reload("/adlog");
    }
    return(
        <>
        <Headbar1/>
        <div className='startback'>
            <div><button className='stbtn' onClick={ready}><b>START</b></button></div>
        </div>
        </>
    )
}
export default Start;