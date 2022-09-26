import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from './Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import Filter from './Filter';

import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-actions';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import s from './Phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    dispatch(addContact(payload));
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={s.container}>
      <Container title="Add Contact">
        <ContactForm onSubmit={onAddContact} />
      </Container>
      <Container title="Contact List">
        <input
          type="text"
          onChange={onSetFilter}
          value={filter}
          name="filter"
        />
        <ContactList contact={contacts} removeContact={onRemoveContact} />
      </Container>
    </div>
  );
};

export default Phonebook;
