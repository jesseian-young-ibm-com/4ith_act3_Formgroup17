import React from 'react';
import './App.css';
import "./balls";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";
import Registration from './components/Registration/Registration';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Router>
          <Switch>
          <Route exact path="/4ith_act3_Formgroup17" component={Login}/>
          <Route path="/home" component={Home}/>
        <Route path="/register" component={Registration}/>
        <Route path="/" component={Login}/>
      
      </Switch>
      </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
