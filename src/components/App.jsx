import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const CONTACTS_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem(CONTACTS_KEY));
      data?.length > 0 && setContacts(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = (name, number) => {
    const checkExistence = contacts.find(item => {
      return item.name.toUpperCase() === name.toUpperCase();
    });

    checkExistence
      ? alert(`"${name}" is already in contacts`)
      : setContacts(prev => [...prev, { id: nanoid(), name, number }]);
  };

  const onInputChange = value => {
    setFilter(value);
  };

  const onContactDelete = updatedContacts => {
    setContacts(updatedContacts);
  };

  return (
    <>
      <Section title="This is my Contact Book">
        <Phonebook onFormSubmit={onFormSubmit} />
        <Contacts
          contacts={contacts}
          filter={filter}
          onInputChange={onInputChange}
          onContactDelete={onContactDelete}
        />
      </Section>
    </>
  );
};

export default App;
