import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import {BrowserRouter as Link, NavLink, Redirect} from "react-router-dom";

function Login() {

    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");

    const [flag, setFlag] = useState(false);
    const [flags, setFlags] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('Password').replace(/"/g, "");
        let studentid = localStorage.getItem('StudentID').replace(/"/g, "");
        let firstname= localStorage.getItem('FirstName').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if ((emaillog== "") || (passwordlog=="")) {
            setFlags(true);
            setFlag(false);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== studentid)) {
            setFlag(true);
            setFlags(false);
        } else {
            setHome(!home);
            setFlag(false);
            alert(" Log-in successfully, Welcome! "+ firstname)
        }
    }
    
    function setClear(){
        setFlag(false);
        setFlags(false);
    };


    return (
        <div>
            {home ? <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Student ID</label>
                    <input type="text" className="form-control" placeholder="Student Number"  onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  onChange={(event) => setPasswordlog(event.target.value)} /><br/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <input type="reset" onClick={setClear} className="btn btn-dark btn-lg btn-block"  style= {{float:"right"}}value="Cancel"></input>
              
                <p >
                <br/>
                    Don't have an account?<NavLink   to="/register"> Register</NavLink> 
                </p>
                {flags && <Alert color='primary' variant="warning" >
                    Fill out the missing fields
                        </Alert>}
                {flag && <Alert color='primary' variant="warning" >
                    Incorrect Username or Password Please Try Again
                        </Alert>}
            </form>
                : <Redirect to="/home"/>
                
            }

        </div>
    )
}

export default Login
