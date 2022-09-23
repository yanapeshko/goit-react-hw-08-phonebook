import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import UserMenu from 'components/UserMenu';
import { current } from 'redux/auth/auth-operations';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.main_container}>
      <div className={s.main_title_container}>
        <h1 className={s.main_title}>Phonebook</h1>
      </div>

      <ContactForm />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
