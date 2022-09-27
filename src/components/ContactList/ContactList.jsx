import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import s from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const data = useSelector(state => state.filter.value);
  const normalizedFilter = data.toLowerCase();

  const onFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {contacts.length > 0 && (
        <ul className={s.list}>
          {onFilter().map(({ name, number, id }) => {
            return (
              <ContactItem key={nanoid()} name={name} number={number} id={id} />
            );
          })}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
