import React from "react";
import Headbar1 from "../head/head1";
const About=()=>{

    return(
        <>
        <Headbar1/>
        <div className="about">
        <h1>ABOUT</h1>
        <p>This is the Quiz app application , 
            In this the fisrt page is Start when you click start button you will be directed to the next page with Admin & User.If you are a existed user you can do direct login otherwise you should create new account and do Register.And then do login.
            You can also login by clicking forgot password.</p>
            Once the login is completed you will be the quiz page with four categories namely
            <ul>
             <li>CODING</li> 
             <li>SPORTS</li> 
             <li>CURRENT AFFAIRS</li> 
             <li>ENTERTAINMENT</li>
             </ul>
            When you click enter the quiz will starts,<br></br>
            For each question your marks will be increased by two marks.<br></br>
            And for wrong attempt there is negative marking i.e your score will decreased by one mark.<br></br>
            After completing the quiz , You can check your score in the leaderboard.
        </div>
        </>
        
    )
};
export default About;