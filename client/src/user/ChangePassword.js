import { useRef } from 'react';
import { DialogActions, DialogContent, DialogContentText } from '@mui/material';
import PasswordField from '../inputs/PasswordField';
import SubmitButton from '../inputs/SubmitButton';

const ChangePassword = () => {
    const handleSubmit = () => {

    }

    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    return (
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <DialogContentText>Please Enter your new Password:</DialogContentText>
            <PasswordField {...{ passwordRef }} />
            <PasswordField
              {...{
                passwordRef: confirmPasswordRef,
                id: 'confirmPassword',
                label: 'Confirm Password',
              }}
            />
          </DialogContent>
          <DialogActions>
            <SubmitButton />
          </DialogActions>
        </form>
      );
    };
    
 export default ChangePassword;
