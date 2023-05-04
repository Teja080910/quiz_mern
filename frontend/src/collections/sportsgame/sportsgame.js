import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Sports=()=>
{
    const nav=useNavigate();
    return(
        <>
        <div className="gameback">
        <div className="scorebord"></div>
        <div className="gamebord"></div>
        </div>
        </>
    )
}
export default Sports;