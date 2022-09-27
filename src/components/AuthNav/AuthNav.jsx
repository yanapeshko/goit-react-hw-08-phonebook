import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${s.link} ${s.active}` : s.link;
  return className;
};

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" exact className={getClassName}>
        Register
      </NavLink>
      <NavLink to="/login" exact className={getClassName}>
        Login
      </NavLink>
    </div>
  );
};
