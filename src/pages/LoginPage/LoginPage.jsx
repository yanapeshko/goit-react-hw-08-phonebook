import { useSelector, useDispatch } from 'react-redux';

import LoginForm from 'components/LoginForm';
import { login } from '../../redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';
import s from './LoginPage.module.css';

function LoginPage() {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };
  return (
    <div className={s.container}>
      <h2>Login Page</h2>
      <LoginForm onSubmit={onLogin} />
      {status && <p className={s.text}>{message} </p>}
    </div>
  );
}

export default LoginPage;
