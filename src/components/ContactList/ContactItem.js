import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/operations';
import { getFilterContacts } from '../../redux/selectors';
import s from './ContactListItem.module.css';

const ContactItem = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContacts());
  }, [dispatch]);

  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={s.contactItem}>
        {name}: {number}{' '}
        <button
          className={s.deleteButton}
          type="button"
          onClick={() => dispatch(operations.deleteContact(id))}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactItem;
