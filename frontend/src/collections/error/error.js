import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSadTear} from '@fortawesome/free-solid-svg-icons'
import Headbar from "../head/head";
const Errorpage=()=>{
    return(
        <>
        <Headbar/>
            <div className="err">
                    <p  style={{fontSize:"80px"}}><b>404</b></p>
                    <FontAwesomeIcon icon={faSadTear} size="5x" color="red" className="instagram-icon" />
                <h1>we are sorry,page not found.!</h1>
            </div>
        </>
    )
}
export default Errorpage;