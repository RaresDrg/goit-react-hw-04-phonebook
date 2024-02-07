import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, onContactDelete }) => {
  const handleDelete = ({ target }) => {
    const updatedContacts = contacts.filter(item => item.id !== target.id);
    onContactDelete(updatedContacts);
  };

  return (
    <ul className={styles.contactsList}>
      {contacts.map(item => (
        <li key={item.id}>
          <span>{item.name.toLowerCase()}</span>: <span>{item.number}</span>
          <button onClick={handleDelete} id={item.id} type="button">
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactsList;
