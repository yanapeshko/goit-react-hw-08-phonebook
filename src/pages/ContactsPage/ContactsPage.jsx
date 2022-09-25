import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { getLoading } from 'redux/contacts/contacts-selectors';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Container from 'components/Container';
import s from './ContactsPage.module.css';

function ContactsPage(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <div className={s.container}>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
      {isLoadingContacts && <h1>Loading...</h1>}
    </Container>
  );
}

export default ContactsPage;
