import React from "react";
import Headbar1 from "../head/head1";
const About=()=>{

    return(
        <>
        <Headbar1/>
        <div className="about">
        <h1>ABOUT</h1>
        <p>This is the Quiz app application , 
            In this the fisrt page is Start when you click start button you will be directed to the next page with Admin & User.If you are a existed user you can do direct login otherwise you should create new account and do Register.
            You can also login by clicking forgot password   </p><br></br>
            Once the login is completed you will be the page with four categories namely CODING SPORTS CURRENT AFFAIRS ENTERTAINMENT
            When you click enter the quiz will starts <br></br>
            
            For each question your marks will be increased by 2 marks 
        </div>
        </>
        
    )
};
export default About;