import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

import NameInput from 'components/NameInput/NameInput';
import NumberInput from 'components/NumberInput/NumberInput';
import SubmitBtn from 'components/SubmitBtn/SubmitBtn';

const Phonebook = ({ onFormSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    onFormSubmit(name, number);

    form.reset();
  };

  return (
    <div className={styles.phonebook}>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <NameInput />
        <NumberInput />
        <SubmitBtn text="Add contact" />
      </form>
    </div>
  );
};

Phonebook.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Phonebook;
