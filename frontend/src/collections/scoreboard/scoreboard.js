import React from "react";
const Sbord=()=>
{
    const sc=localStorage.score;
    return(
        <div className="scorebord"><h3>Your Score::{sc}</h3></div>
    )
}
export default Sbord;