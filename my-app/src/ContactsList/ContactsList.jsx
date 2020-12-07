import React from 'react';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
