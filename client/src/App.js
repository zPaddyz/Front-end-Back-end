import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {Container} from '@mui/material';
import Modal from "./user/Modal";
import {useState} from "react";
import ModalContext from './ModalContext';
import Navigation from './Navigation';


/*
<div className="App">
         <h1>Hey, button</h1>
         <button className="openModalBtn" onClick={() => {setOpenModal(true)}}>Open</button>
         {openModal && <Modal closeModal={setOpenModal}/>}
       </div>
*/
function App() {
  
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container maxWidth="lg" sx={{textAlign: 'center', mt: '3rem'}}> 
    <ModalContext>
      <Modal />
      <Navigation />
    </ModalContext>
    
      
    </Container>
  /*
  <div className="App">
      
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Account Settings
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>

  
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
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </div>
  </Router>*/
  );
}

export default App;
