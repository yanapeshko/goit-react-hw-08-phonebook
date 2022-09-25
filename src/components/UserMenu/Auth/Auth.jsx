import React from 'react';
import { NavLink } from 'react-router-dom';

// import s from './Auth.module.css ';

const Auth = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Auth;
