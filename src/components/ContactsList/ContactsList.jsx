import { useSelector } from 'react-redux';
import { TbMoodSad } from 'react-icons/tb';
import ContactsItem from 'components/ContactsItem';
import css from './ContactsList.module.css';
import {
  selectContacts,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/contactsSelectors';

const { contactsTitle, contactList, message, messageIcon, messageText } = css;

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <h2 className={contactsTitle}>Contacts</h2>
      {contacts?.length > 0 && (
        <ul className={contactList}>
          {visibleContacts.map(contact => {
            return <ContactsItem key={contact.id} contact={contact} />;
          })}
        </ul>
      )}

      {contacts?.length === 0 && !isLoading && (
        <div className={message}>
          <TbMoodSad size={80} className={messageIcon} />
          <p className={messageText}>You don't have any contact yet</p>
        </div>
      )}
    </>
  );
};

export default ContactsList;
