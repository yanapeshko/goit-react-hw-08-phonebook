import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useRegisterMutation } from '../../shared/authAPI';
import s from './RegisterPage.module.css';

export const RegisterPage = () => {
  const [register] = useRegisterMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    register({ name, email, password }).unwrap();

    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} id={nanoid()}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label} id={nanoid()}>
        Email
        <input
          className={s.input}
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label className={s.label} id={nanoid()} name="password">
        Password
        <input
          className={s.input}
          type="text"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
