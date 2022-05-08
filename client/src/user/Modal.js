import react from "react";
import { Close } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';

import ChangePassword from './ChangePassword';

import {useCon} from '../ModalContext'
import { grey } from "@mui/material/colors";


const Modal = () => {
  const{modal, setModal} = useCon();


const handle = () => {
  setModal({ ...modal, isOpen: false });
};

return (
  <Dialog open={modal.isOpen} onClose={handle}>
    <DialogTitle>
      {modal.title}
      <IconButton
        aria-label="Close"
        onClick={handle}
        sx={{
          top: 8,
          color: grey,
          right: 8,
          position: 'absolute',
        }}
      >
        <Close />
      </IconButton>
    </DialogTitle>
    {modal.content}
  </Dialog>
);
};

export default Modal;








/*
const Modal = ({setOpenModal}) => {
  
 
  const handleAction = async (action) => {
    switch(action){
      case 'changePassword':
    
      case 'changeEmail':
      
      case 'deleteAccount':


    }
  }
      return(
        <Dialog open={setOpenModal}>
        <DialogTitle>
          Account Settings
          <IconButton
          aria-label="Close"
          onClick={() => {
            setOpenModal(false);
          }}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          >
            <Close />
          </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              Press one of the three options below to edit your account/profile settings:
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ flexDirection: 'column', gap: 2, my: 2 }}>
    
              <Button onClick={() => handleAction('changePassword')}>
                Change Password
              </Button>
           
            <Button onClick={() => handleAction('changeEmail')}>
              Change Email
            </Button>
            <Button onClick={() => handleAction('deleteAccount')}>
              Delete Account
            </Button>
          </DialogActions>
          </Dialog>
      );
  }  
*/
  
      
  
  /*
   return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="title">
        <h1>Are You Sure You Want to Continue?</h1>
      </div>
      <div className="body">
        <p>The next page looks amazing. Hope you want to go there!</p>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          id="cancelBtn"
        >
          Cancel
        </button>
        <button>Continue</button>
      </div>
    </div>
  </div>*/
        
