import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import css from './Form.module.css';
import { selectContacts } from 'redux/selectors';
import Swal from 'sweetalert2';

const { form, formLabel, submitBtn, formInput } = css;

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setNumder] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const newContact = { name, phone };

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') setName(value);
    if (name === 'phone') setNumder(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    // const name = evt.target.elements.name.value;
    // const phone = evt.target.elements.phone.value;

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
          className={formInput}
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
          name="phone"
          className={formInput}
          value={phone}
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
