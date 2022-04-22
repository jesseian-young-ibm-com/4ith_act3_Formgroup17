import React, { useState } from 'react'
//import "../../balls";
import { Form, Alert } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import { Redirect } from 'react-router';

function Registration() {

    const [lastname, setLastName] = useState("");
    const [givenname, setGivenName] = useState("");
    const [middlename, setMiddleName] = useState("");
    const [college, setCollege] = useState("");
    const [studentnumber, setStudentNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const [programenrolled, setProgramEnrolled] = useState("");
    const [setyearlevel, setYearLevel] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
  
    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!lastname || !givenname || !middlename || !college || !programenrolled || !setyearlevel || !studentnumber || !password) {
            setFlag(true); 
        }
        else if((password !== confirmpassword)){
            setFlag(true);
        } 
        
        else {
            setFlag(false);
            localStorage.setItem("StudentID", JSON.stringify(studentnumber));
            localStorage.setItem("Password", JSON.stringify(password));
            localStorage.setItem("FirstName", JSON.stringify(givenname));
            localStorage.setItem("Middlename", JSON.stringify(middlename));
            localStorage.setItem("LastName", JSON.stringify(lastname));
            localStorage.setItem("College", JSON.stringify(college));
            localStorage.setItem("ProgramEnrolled", JSON.stringify(programenrolled));
            localStorage.setItem("YearLevel", JSON.stringify(setyearlevel));
            console.log("Saved in Local Storage");
            setLogin(!login)
            alert("Credentials have been saved successfully, you can now log in!")
            
        }

    }
    function setClear(){
        setFlag(false);
    }

    return (
        <>
            <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

              

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" name="last name" required onChange={(event) => setLastName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Given Name</label>
                    <input type="text" className="form-control" placeholder="First name" name="first name" required onChange={(event) => setGivenName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Middle Name</label>
                    <input type="text" className="form-control" placeholder="Middle Name" name="middle name" required onChange={(event) => setMiddleName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>College</label>
                    <input type="text" className="form-control" placeholder="College" name="college" required onChange={(event) => setCollege(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Program Enrolled</label>
                    <Form.Control as="select" onChange={(event) => setProgramEnrolled(event.target.value)} >
                    <option>Course Option</option>
                        <option>Computer Science</option>
                        <option>Information Technology</option>
                        <option>Information System</option>
                        <option>Computer Engineering</option>
                    </Form.Control>
                </div>

                <div className="form-group">
                    <label>Year Level</label>
                    <Form.Control as="select" onChange={(event) => setYearLevel(event.target.value)} >
                    <option>Year Level</option>
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                    </Form.Control>
                </div>

                <div className="form-group">
                    <label>Student ID Number</label>
                    <input type="text" className="form-control" placeholder="Student Number" required onChange={(event) => setStudentNumber(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"  title="Must contain at least one number, one special character, and one uppercase and lowercase letter, and at least 8 or more characters." required onChange={(event) => setPassword(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" required onChange={(event) => setConfirmPassword(event.target.value)} /><br/>
                </div>



               <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <input type="reset" onClick={setClear} className="btn btn-dark btn-lg btn-block" style= {{float:"right"}}value="Cancel"></input> 
                
                <p className="forgot-password text-right">
                   
                    Already registered<NavLink   to="/"> login in?</NavLink> 
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        Password Doesn't Match
                </Alert> } 

            </form> : <Redirect to="/"/>}  
            </div>
        </>
    )
}

export default Registration
