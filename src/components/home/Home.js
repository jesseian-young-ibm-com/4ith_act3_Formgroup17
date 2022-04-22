import React from 'react';
import { Redirect } from 'react-router';
import "../../App.css";
import {Link} from "react-router-dom";

function Home() {
  
    let firstname= localStorage.getItem('FirstName').replace(/"/g, "");
    let middlename= localStorage.getItem('Middlename').replace(/"/g, "");
    let lastname= localStorage.getItem('LastName').replace(/"/g, "");
    let college= localStorage.getItem('College').replace(/"/g, "");
    let course= localStorage.getItem('ProgramEnrolled').replace(/"/g, "");
    let yearlevel= localStorage.getItem('YearLevel').replace(/"/g, "");
    return (
        
        <>
        <div class="text-center">
                    <h1 style= {{textAlign:"center"}}>Welcome, {firstname} to our Student Portal</h1>
                    <p><strong>Name: </strong> {firstname+" "+middlename+" "+lastname}</p>
                    <p><strong>College: </strong>{college}</p>
                    <p><strong>Course Enrolled: </strong>{course}</p>
                    <p><strong>Year Level: </strong> {yearlevel}</p>
                  <Link to="/">  <button className="btn btn-dark btn-lg btn-block"> Log Out</button> </Link>
                    </div>
              
     </>
    )
}

export default Home
