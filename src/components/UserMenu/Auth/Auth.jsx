import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Auth.module.css ';

const Auth = () => {
  return (
    <div className={s.wrapper}>
      <NavLink to="/register" className={s.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.link}>
        Login
      </NavLink>
    </div>
  );
};

export default Auth;
