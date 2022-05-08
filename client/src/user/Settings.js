import {useCon} from '../ModalContext';
import ChangePassword from './ChangePassword';
import {
    Button,
    DialogContent,
    DialogActions,
    DialogContentText,
  } from '@mui/material';


const Settings = () => {
    const { setModal, modal} = useCon();

    const handleAction = async (action) => {
        switch(action){
            case 'redirectPassword':
                setModal({
                    ...modal, 
                    title: 'Change Password',
                    content: <ChangePassword />
                });
                break;
        }
    };

    return(
    <>
          <DialogContent dividers>
            <DialogContentText>
              Press one of the three options below to edit your account/profile settings:
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ flexDirection: 'column', gap: 2, my: 2 }}>
    
              <Button onClick={() => handleAction('redirectPassword')}>
                Change Password
              </Button>
           
            <Button onClick={() => handleAction('redirectEmail')}>
              Change Email
            </Button>
            <Button onClick={() => handleAction('deleteAccount')}>
              Delete Account
            </Button>
          </DialogActions>
          </>
      );
};

export default Settings;