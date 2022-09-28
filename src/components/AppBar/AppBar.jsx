import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-slice';
import { Toolbar, Typography } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import s from './AppBar.module.css';

export const AppBar = () => {
  const isLogin = useSelector(getIsLoggedIn);

  return (
    <Toolbar>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        <header className={s.header}>
          <h1>Phonebook</h1>
          <Navigation />
          {isLogin ? <UserMenu /> : <AuthNav />}
        </header>
      </Typography>
    </Toolbar>
  );
};
