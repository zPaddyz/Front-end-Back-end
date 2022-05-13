import React from "react";

import "./App.css";
import Login from "./Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from "./Register";
import Home from "./Home";
import About from "./about/About";
import Event from "./Event/Event";
import ModalContext from './ModalContext';
import Modal from "./user/Modal";
import rootStore from "./stores/RootStore";


function App() {
  return (
    <ModalContext>
      <Modal />
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
            <Route exact path="/event/:id" >
              <Event store={rootStore}/>
            </Route>
          </Switch>
        </div>
      </Router>
      </ModalContext>
  );
}

export default App;
