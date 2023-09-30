import React from "react";
import Headbar from "../head/head";
const About=()=>{

    return(
        <>
        <Headbar/>
        <div className="about">
        <h1>ABOUT</h1>
        <p>This is the Quiz app application , 
            In this the fisrt page is Start when you click start button you will be directed to the next page with Admin & User. If you are a existed user you can do direct login otherwise you should register to new account. And then do login.
            You can also login by clicking forgot password. </p>
            Once the login is completed you will be the quiz page with four categories namely
            <ul>
             <li>CODING</li> 
             <li>SPORTS</li> 
             <li>CURRENT AFFAIRS</li> 
             <li>ENTERTAINMENT</li>
             </ul>
            When you click enter the quiz will starts,<br></br>
            For each correct attempt your marks will be increased by one.<br></br>
            After completing the quiz , You can check your score in the leaderboard.
        </div>
        </>
        
    )
};
export default About;