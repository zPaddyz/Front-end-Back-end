import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from "./Register";
import Home from "./Home";
import CApp from "./commentApp";
import About from "./about/About";

function App() {
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route >
        <Route exact path="/comment">
          <CApp/>
        </Route>
        <Route exact path="/event/:id">
          <Event/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
