import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  useUpdateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactSlice';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, names, numbers, id }) {
  const contactId = id;
  const { data } = useFetchContactsQuery();
  const [name, setNameNew] = useState(names);
  const [number, setNumberNew] = useState(numbers);
  const [changeContact] = useUpdateContactMutation();

  const onSubmitForm = contact => {
    const newContact = { contactId, ...contact };

    data.some(contact => contact.name === names && contact.id !== contactId)
      ? alert(`${name} is already in the contact's list.`)
      : changeContact(newContact);
    onClose();
  };

  function handleInputChange({ target }) {
    target.name === 'name'
      ? setNameNew(target.value)
      : setNumberNew(target.value);
  }

  const reset = () => {
    setNameNew('');
    setNumberNew('');
  };

  const handelSubmit = e => {
    e.preventDefault();
    onSubmitForm({ name, number }, id);
    reset();
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.modalBack} onClick={handleBackdropClick}>
      <div className={s.modalContent}>
        <form className={s.form} onSubmit={handelSubmit}>
          <label className={s.label} id={nanoid()} name="name">
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
            Phone
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={s.button}>Edit contact</button>
        </form>
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  names: PropTypes.string.isRequired,
  numbers: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
