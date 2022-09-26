import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  addContact,
  fetchContacts,
} from '../../../redux/contacts/contacts-operations';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = ({ currentTarget: { name, value } }) => {
    name === 'name' ? setName(value) : setPhone(value);
  };

  const resetState = () => {
    setName('');
    setPhone('');
  };
  console.log(onSubmit);

  const handleSubmit = e => {
    resetState();
    dispatch(addContact({ name, phone }));
    e.preventDefault();
    onSubmit({ name, phone });
  };

  return (
    <form className={s.form_container} onSubmit={handleSubmit}>
      <label className={s.form_label}>
        Name
        <input
          className={s.form_input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <label className={s.form_label}>
        Number
        <input
          className={s.form_input}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </label>
      <button className={s.form_button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
