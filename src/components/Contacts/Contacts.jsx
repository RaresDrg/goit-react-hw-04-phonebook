import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

import FilterContactsInput from 'components/FilterContactsInput/FilterContactsInput';
import ContactsList from 'components/ContactsList/ContactsList';
import AbsentContactsNotification from 'components/AbsentContactsNotification/AbsentContactsNotification';

const Contacts = ({ contacts, filter, onInputChange, onContactDelete }) => {
  const contactsFiltered = contacts.filter(item =>
    item.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>

      <FilterContactsInput onInputChange={onInputChange} />

      {contactsFiltered.length > 0 ? (
        <ContactsList
          contacts={contactsFiltered}
          onContactDelete={onContactDelete}
        />
      ) : (
        <AbsentContactsNotification searchedContact={filter} />
      )}
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};

export default Contacts;
