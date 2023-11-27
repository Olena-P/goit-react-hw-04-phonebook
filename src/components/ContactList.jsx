import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
