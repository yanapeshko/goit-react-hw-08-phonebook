import { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  useFetchContactsQuery,
  useCreacteContactMutation,
} from 'redux/contacts/contactSlice';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreacteContactMutation();
  const { data } = useFetchContactsQuery();
  const onSubmitForm = async ({ name, number }) => {
    const newContact = { name, number };

    if (
      data.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts!`);
    }

    return createContact(newContact).unwrap();
  };

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handelSubmit = event => {
    event.preventDefault();
    onSubmitForm({ name, number });
    resetState();
  };

  return (
    <>
      <form onSubmit={handelSubmit} className={s.form}>
        <label id={nanoid()} name="name" className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label id={nanoid()} name="phone" className={s.label}>
          Phone
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={s.button}>Add contact</button>
      </form>
      <h2>Contacts</h2>
      <Filter />
      {data && <ContactList contacts={data} />}
    </>
  );
}
