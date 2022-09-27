import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${s.link} ${s.active}` : s.link;
  return className;
};

export const Navigation = () => (
  <nav>
    <NavLink to="/contacts" exact className={getClassName}>
      Contacts
    </NavLink>
  </nav>
);
