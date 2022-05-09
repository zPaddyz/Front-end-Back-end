import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

const PasswordField = ({
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      margin="normal"
      id={'password'}
      label={'password'}
      autoFocus
      variant="standard"
      fullWidth
      required
      type={showPassword ? 'text' : 'password'}
      inputProps={{ minLength: 6 }}
    />
  );
};

export default PasswordField;