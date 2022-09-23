import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import s from './RegisterForm.module.css';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  //   const { email, password } = state;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.group}>
        <label className={s.label}>Enter your name</label>
        <input
          {...register('name')}
          className={s.input}
          placeholder="Enter your name"
        />
      </div>
      <div className={s.group}>
        <label className={s.label}>Enter your email</label>
        <input
          {...register('email')}
          className={s.input}
          placeholder="Enter your email"
        />
      </div>
      <div className={s.group}>
        <label className={s.label}>Enter your password</label>
        <input
          {...register('password')}
          className={s.input}
          placeholder="Enter your password"
        />
      </div>
      <div className={s.group}>
        <button className={s.button}>Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
