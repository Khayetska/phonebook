import { Route, Routes } from 'react-router-dom';
// import Form from './Form';
// import ContactsList from './ContactsList';
// import Finder from './Finder';
// import MainTitle from './MainTitle';
// import Layout from './Layout';
// import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Layout from './Layout';
import ContactsPage from 'pages/ContactsPage';
import LogIn from './LogIn';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { selectisRefreshing } from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="login" element={<LogIn />} />
      <Route path="register" element={<LogIn register />} />
    </Routes>
  );
};
