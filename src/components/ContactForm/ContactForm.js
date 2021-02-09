import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEntities } from '../../redux/selectors';
import contactsOperations from '../../redux/operations';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const contacts = useSelector(getEntities);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!checkName()) return;

    dispatch(contactsOperations.addContact({ name, number }));

    resetForm();
  };

  const checkName = () => {
    const isfilterName = !!contacts.find(contact => contact.name === name);
    isfilterName && alert(`${name} is already in contacts`);
    return !isfilterName;
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.formInner}>
        <label className={s.label}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={s.label}>
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button className={s.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
