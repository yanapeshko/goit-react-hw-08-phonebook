import { useSelector, useDispatch } from 'react-redux';

import RegisterForm from 'components/RegisterForm';
import { signup } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';
import s from './RegisterPage.module.css';

function RegisterPage() {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };
  return (
    <div className={s.container}>
      <h2>Login Page</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && <p className={s.text}>{message} </p>}
    </div>
  );
}

export default RegisterPage;
