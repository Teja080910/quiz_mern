import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram,faWhatsapp,faFacebook,faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";
const Footer=()=>
{
    const Click1=()=>
    {
       
    }
    const Click2=()=>
    {

    }
    const Click3=()=>
    {

    }
    const Click4=()=>
    {

    }
    return(
        <div className='footer'>
            <div style={{color:'#707'}}>support me:</div>
            <div style={{marginLeft:'10%'}}>
            <button style={{background:'none',border:'none'}}><FontAwesomeIcon icon={faInstagram} size="2x" color="#333" className="instagram-icon" onClick={Click1} /></button>
            </div>
            <div style={{marginLeft:'10%'}}>
            <button style={{background:'none',border:'none'}}><FontAwesomeIcon icon={faFacebook} size="2x" color="#333" className="instagram-icon" onClick={Click2} /></button>
            </div>
            <div style={{marginLeft:'40%'}}>
            <button style={{background:'none',border:'none'}}><FontAwesomeIcon icon={faTelegram} size="2x" color="#333" className="instagram-icon" onClick={Click3} /></button>
            </div>
            <div style={{marginLeft:'10%'}}>
            <button style={{background:'none',border:'none'}}><FontAwesomeIcon icon={faWhatsapp} size="2x" color="#333" className="instagram-icon" onClick={Click4} /></button>
            </div>
            <div style={{position:'absolute',color:"#500",marginLeft:'46%'}}>Thank you ❤</div>
        </div>
    )
}
export default Footer;