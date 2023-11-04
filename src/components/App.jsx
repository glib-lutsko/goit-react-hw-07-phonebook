import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import { selectContacts } from './redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts && contacts?.length > 0 && <Filter />} <ContactList />
    </>
  );
};
