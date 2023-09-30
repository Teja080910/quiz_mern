import React from 'react';
import { useNavigate } from 'react-router-dom';
import Headbar from '../head/head';
import Button from 'react-bootstrap/esm/Button';
const Adlog=()=>
{
    const nav=useNavigate();
    const Admin=()=>
    {
        nav('/192.0809.01');
    }
    const User=()=>
    {
        nav("/192.0809.05");
    }
    return(
        <>
        <Headbar/>
            <div className='regi'>
                <Button className='adbtn1' onClick={Admin}><b>ADMIN</b></Button>
                <Button className='adbtn2' onClick={User}><b>USER</b></Button>
            </div>
        </>
    )
}
export default Adlog;