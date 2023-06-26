import ContactsList from 'components/ContactsList';
import Finder from 'components/Finder';
import Form from 'components/Form';
import MainTitle from 'components/MainTitle';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectErorr,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';

function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErorr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <MainTitle />
      <Form />
      {contacts?.length > 0 && <Finder />}
      <ContactsList />
      {isLoading && !error && (
        <p>
          <b>Request in progress...</b>
        </p>
      )}
    </div>
  );
}

export default ContactsPage;
