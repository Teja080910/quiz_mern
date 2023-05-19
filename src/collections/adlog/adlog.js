import React from 'react';
import { useNavigate } from 'react-router-dom';
import Headbar1 from '../head/head1';
const Adlog=()=>
{
    const nav=useNavigate();
    const Admin=()=>
    {
        nav('/adminlogin');
    }
    const User=()=>
    {
        nav("/login");
    }
    return(
        <>
        <Headbar1/>
            <div className='regi'>
                <button className='adbtn1' onClick={Admin}><b>ADMIN</b></button>
                <button className='adbtn2' onClick={User}><b>USER</b></button>
            </div>
        </>
    )
}
export default Adlog;