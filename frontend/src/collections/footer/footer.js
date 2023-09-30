import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram,faWhatsapp,faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons";
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
            <button style={{background:'none',border:'none'}}><FontAwesomeIcon icon={faInstagram} size="2x" color="#333" className="instagram-icon" onClick={Click1} /></button>
            <button style={{background:'none',border:'none'}}><FontAwesomeIcon icon={faFacebook} size="2x" color="#333" className="instagram-icon" onClick={Click2} /></button>
            <div style={{color:"#500"}}>Thank you ❤</div>
            <button style={{background:'none',border:'none'}}><FontAwesomeIcon icon={faTelegram} size="2x" color="#333" className="instagram-icon" onClick={Click3} /></button>
            <button style={{background:'none',border:'none'}}><FontAwesomeIcon icon={faWhatsapp} size="2x" color="#333" className="instagram-icon" onClick={Click4} /></button>
        </div>
    )
}
export default Footer;