import React from 'react';
const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;
