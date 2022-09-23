import { useSelector, useDispatch } from 'react-redux';

import LoginForm from 'components/LoginForm';
import { signup } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };
  return (
    <div className={s.container}>
      <h2>Login Page</h2>
      <LoginForm onSubmit={onRegister} />
      {status && <p className={s.text}>{message} </p>}
    </div>
  );
};

export default RegisterPage;
