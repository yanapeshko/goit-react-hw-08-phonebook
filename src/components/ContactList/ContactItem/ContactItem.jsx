import { useState } from 'react';
import PropTypes from 'prop-types';

import { useDeleteContactsMutation } from 'redux/contacts/contactSlice';
import Modal from 'components/ModalEdit/Modal';
import s from './ContactItem.module.css';

export const ContactItem = ({ id, number, name }) => {
  const [onDeleteContact, { isLoading }] = useDeleteContactsMutation();
  const [showModal, setShowModal] = useState(false);

  const openModal = id => {
    setShowModal(prevState => !prevState);
  };
  const onCloseModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <>
      <div className={s.itemContact}>
        <div className={s.text}>
          {name}: {number}
        </div>
        <div>
          <button
            onClick={() => openModal(id)}
            type="button"
            className={s.button}
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteContact(id).unwrap()}
            type="button"
            className={s.button}
          >
            {isLoading ? 'Processing...' : 'Delete'}
          </button>
        </div>
        {showModal && (
          <Modal id={id} names={name} numbers={number} onClose={onCloseModal} />
        )}
      </div>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
