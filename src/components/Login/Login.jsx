import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useLoginMutation } from 'shared/authAPI';
import s from './Login.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn] = useLoginMutation();

  const hanleSubmit = ev => {
    ev.preventDefault();
    logIn({ email, password }).unwrap();
    setEmail('');
    setPassword('');
  };
  function handleInputChange({ target: { name, value } }) {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  }
  return (
    <>
      <form onSubmit={hanleSubmit} className={s.form}>
        <label id={nanoid()} className={s.label}>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
            className={s.input}
            required
          />
        </label>
        <label id={nanoid()} className={s.label}>
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleInputChange}
            className={s.input}
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Login
        </button>
      </form>
    </>
  );
};
