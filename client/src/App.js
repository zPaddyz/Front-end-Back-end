import React from "react";

import "./App.css";
import Login from "./Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from "./Register";
import Home from "./Home";
import About from "./about/About";
import Event from "./Event/Event";


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
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/event/:id">
              <Event/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
