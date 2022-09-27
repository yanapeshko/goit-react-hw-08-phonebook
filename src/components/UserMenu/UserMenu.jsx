import { useDispatch, useSelector } from 'react-redux';
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
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Hello, {name}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </div>
  );
};
