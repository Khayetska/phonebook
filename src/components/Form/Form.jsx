import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import Swal from 'sweetalert2';
import css from './Form.module.css';
import styles from 'css/input.module.css';

const { form, formLabel, submitBtn, formInput } = css;

const { input } = styles;

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumder] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const newContact = { name, number };

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumder(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    // const name = evt.target.elements.name.value;
    // const number = evt.target.elements.number.value;

    for (const contact of contacts) {
      if (contact.name === name) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `'${name}' is already in contacts.`,
        });
        reset();
        return;
      }
    }

    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumder('');
  };

  return (
    <form onSubmit={handleSubmit} className={form}>
      <label className={formLabel}>
        Name
        <input
          type="text"
          name="name"
          className={`${formInput} ${input}`}
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={formLabel}>
        Number
        <input
          type="tel"
          name="number"
          className={`${formInput} ${input}`}
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={submitBtn}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
