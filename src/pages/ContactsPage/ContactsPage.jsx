import { useSelector } from 'react-redux';

import { getLoading } from 'redux/contacts/contacts-selectors';
// import ContactForm from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';
import Phonebook from 'components/Phonebook';
import Container from 'components/Container';
import s from './ContactsPage.module.css';

function ContactsPage(params) {
  const isLoadingContacts = useSelector(getLoading);

  return (
    <Container>
      <div className={s.container}>
        <Phonebook />
        {/* <ContactForm />
        <Filter />
        <ContactList /> */}
      </div>
      {isLoadingContacts && <h1>Loading...</h1>}
    </Container>
  );
}

export default ContactsPage;
