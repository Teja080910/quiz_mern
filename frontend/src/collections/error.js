import React from "react";
import '.App.css';
import { NavLink } from 'react-router-dom';

const Errorpage=()=>{
    return(
        <>
        <div id="not found">
            <div className="not found">
                <div className="not found-404">
                    <h1>404</h1>
                </div>
                <h2>we are sorry,page not found.!</h2>
            
            </div>
        </div>
        </>
    )
}
export default Errorpage;