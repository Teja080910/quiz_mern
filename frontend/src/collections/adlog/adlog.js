import React from 'react';
import { useNavigate } from 'react-router-dom';
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
            <div className='regi'>
                <button className='adbtn1' onClick={Admin}><b>ADMIN</b></button>
                <button className='adbtn2' onClick={User}><b>USER</b></button>
            </div>
        </>
    )
}
export default Adlog;