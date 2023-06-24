import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectIsLoggedIn, selectisRefreshing } from 'redux/auth/authSelectors';

// const options = {
//   background: '#f02eaa',
//   position: 'center-top',
//   width: '150px',
//   timeout: 1800,
//   showOnlyTheLastOne: true,
//   pauseOnHover: false,
//   fontSize: '15px',
//   useIcon: false,
//   cssAnimationStyle: 'from-top',
// };

function PrivateRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectisRefreshing);

  const shouldRedirect = !isRefreshing & !isLoggedIn;

  // if (shouldRedirect) Notify.info('Log in first', options);

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
}

export default PrivateRoute;
