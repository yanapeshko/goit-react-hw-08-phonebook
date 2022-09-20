import React from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
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
