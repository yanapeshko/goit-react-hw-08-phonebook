// import { nanoid } from 'nanoid';
import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControl,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useLoginMutation } from 'shared/authAPI';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const hanleSubmit = ev => {
    ev.preventDefault();
    logIn({ email, password }).unwrap();
    setEmail('');
    setPassword('');
  };
  function handleChange({ target: { name, value } }) {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  }
  return (
    <>
      <Container>
        <FormControl
          component="form"
          onSubmit={hanleSubmit}
          sx={{
            marginTop: 20,
          }}
          variant="outlined"
          margin="normal"
        >
          <Typography variant="h3" component="h3">
            Login
          </Typography>

          <TextField
            type="emailt"
            name="email"
            value={email}
            onChange={handleChange}
            id="outlined-email"
            label="Email"
            variant="outlined"
            margin="normal"
            required
          />

          <TextField
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
            id="outlined-password-input"
            label="Password"
            autoComplete="current-password"
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" variant="contained">
            Login
          </Button>
        </FormControl>
      </Container>
    </>
  );
};
