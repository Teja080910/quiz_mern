import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Headbar from "../head/head";
const Design=()=>
{
    return(
        <>
        <Headbar/>
        <div className="gameback">
        <div className="scorebord"></div>
        <div className="gamebord"></div>
        </div>
        </>
    )
}
export default Design;