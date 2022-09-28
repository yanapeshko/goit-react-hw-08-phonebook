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
import { useRegisterMutation } from '../../shared/authAPI';

export const RegisterPage = () => {
  const [register] = useRegisterMutation();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [contact, setContact] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  function handleChange(e) {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  }

  // const resetState = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  const resetState = () => {
    setContact('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    // register({ name, email, password }).unwrap();
    register(contact).unwrap();

    resetState();
  };

  return (
    <>
      <Container>
        <FormControl
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginTop: 20,
          }}
          autoComplete="off"
          variant="outlined"
          margin="normal"
        >
          <Typography variant="h3" component="h3">
            Registration
          </Typography>

          <TextField
            type="text"
            name="name"
            // value={name}
            onChange={handleChange}
            id="outlined-name"
            label="Name"
            variant="outlined"
            margin="normal"
          />

          <TextField
            type="email"
            name="email"
            // value={email}
            onChange={handleChange}
            id="outlined-email"
            label="Email"
            variant="outlined"
            helperText="We will never share your email."
            margin="normal"
          />

          <TextField
            type={showPassword ? 'text' : 'password'}
            name="password"
            // value={password}
            onChange={handleChange}
            id="outlined-password-input"
            label="Password"
            autoComplete="current-password"
            margin="normal"
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
            Sign up
          </Button>
        </FormControl>
      </Container>
    </>
  );
};
