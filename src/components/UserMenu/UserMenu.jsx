import { Link } from 'react-router-dom';

import Menu from './Menu';
import Auth from './Auth';
import User from './User';
import useAuth from 'shared/hooks/useAuth';
import s from './UserMenu.module.css';

import React from 'react';

const UserMenu = () => {
  const isLogin = useAuth();
  return (
    <div className={s.wrapper}>
      <Link className={s.logo} to="/">
        Phonebook
      </Link>
      {isLogin && <Menu />}
      {isLogin ? <User /> : <Auth />}
    </div>
  );
};

export default UserMenu;
