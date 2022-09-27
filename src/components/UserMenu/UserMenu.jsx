import { useDispatch, useSelector } from 'react-redux';
import { Stack, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import defaultAvatar from '../../images/avatar.png';
import { useLogoutMutation } from 'shared/authAPI';
import { getUsername } from 'redux/auth/auth-slice';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const [logOut] = useLogoutMutation();

  const avatar = defaultAvatar;

  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <Typography>Hello, {name}</Typography>
      <IconButton type="button" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </IconButton>
    </Stack>
  );
};
