import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <p>Welcome, {name}</p>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </>
  );
}

export default UserMenu;
