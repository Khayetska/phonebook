import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? (
        <>
          <UserMenu />
        </>
      ) : (
        <>
          <p>You're not loggid in</p>
          {/* <AuthNav/> */}
        </>
      )}
    </header>
  );
}

export default AppBar;
