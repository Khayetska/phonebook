import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
// import Navigation from 'components/Navigation';
import AppBar from 'components/AppBar';

function Layout() {
  return (
    <div className={css.conteiner}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
