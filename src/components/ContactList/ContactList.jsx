import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeContact } from '../../redux/contacts/contacts-operations.js';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors.js';
import s from './ContactList.module.css';

function ContactList() {
  const visibleContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const contactsList = visibleContacts.map(({ id, name, phone }) => (
    <li className={s.item} key={id}>
      <div>
        <span className={s.item_text}>
          {name}: {phone}
        </span>
        <button
          className={s.item_button}
          id={id}
          type="button"
          onClick={() => dispatch(removeContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return <ul className={s.list}>{contactsList}</ul>;
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
