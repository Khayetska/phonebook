import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const { nav, nav_accent, nav_link, nav_link_accent, selected } = css;

function Navigation({ accent = false }) {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  const setNavClass = accent ? `${nav_accent} ${nav}` : nav;

  const setAccentClass = accent ? `${nav_link_accent} ${nav_link}` : nav_link;

  const SetNavLinkClass = ({ isActive }) =>
    isActive ? `${setAccentClass} ${selected} ` : setAccentClass;

  return (
    <div>
      <nav className={setNavClass}>
        <NavLink to="/" className={SetNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={SetNavLinkClass}>
          Contacts
        </NavLink>
        {!IsLoggedIn && (
          <>
            <NavLink to="/login" className={SetNavLinkClass}>
              Login
            </NavLink>
            <NavLink to="/register" className={SetNavLinkClass}>
              Register
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
