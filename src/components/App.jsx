import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectErorr, selectIsLoading } from 'redux/selectors';
import Form from './Form';
import ContactsList from './ContactsList';
import Finder from './Finder';
import MainTitle from './MainTitle';
import Layout from './Layout';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErorr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <MainTitle />
      <Form />
      <Finder />
      <ContactsList />
      {isLoading && !error && (
        <p>
          <b>Request in progress...</b>
        </p>
      )}
    </Layout>
  );
};
