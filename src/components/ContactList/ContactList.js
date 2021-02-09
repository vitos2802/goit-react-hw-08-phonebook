import ContactItem from './ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  return (
    <ul className={s.contactList}>
      <ContactItem />
    </ul>
  );
};

export default ContactList;
