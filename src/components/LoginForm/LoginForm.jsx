import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import s from './LoginForm.module.css';

const schema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.group}>
        <label className={s.label}>User email</label>
        <input
          {...register('email')}
          className={s.input}
          placeholder="Enter your email"
        />
      </div>
      <div className={s.group}>
        <label className={s.label}>User password</label>
        <input
          {...register('password')}
          className={s.input}
          placeholder="Enter your password"
        />
      </div>
      <div className={s.group}>
        <button className={s.button}>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
