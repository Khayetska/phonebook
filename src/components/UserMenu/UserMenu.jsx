import React from 'react';
import { BsArrowRightShort as ArrowIcon } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

const { userMenu, userMenu_txt, userMenu_name, userMenu_btn, userMenu_icon } =
  css;

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={userMenu}>
      <p className={userMenu_txt}>
        Welcome, <span className={userMenu_name}>{name}</span>
      </p>
      <button type="button" onClick={handleLogOut} className={userMenu_btn}>
        Logout
        <ArrowIcon className={userMenu_icon} size={20} />
      </button>
    </div>
  );
}

export default UserMenu;
