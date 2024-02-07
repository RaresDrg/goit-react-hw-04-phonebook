import PropTypes from 'prop-types';
import styles from './AbsentContactsNotification.module.css';

const AbsentContactsNotification = ({ searchedContact }) => {
  return (
    <>
      <p className={styles.notification}>
        {searchedContact === ''
          ? "You haven't saved any contacts yet"
          : `" ${searchedContact} " is not saved in your contacts list`}
      </p>
    </>
  );
};

AbsentContactsNotification.propTypes = {
  searchedContact: PropTypes.string,
};

export default AbsentContactsNotification;
