import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import css from './AppBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </header>
  );
}

export default AppBar;
