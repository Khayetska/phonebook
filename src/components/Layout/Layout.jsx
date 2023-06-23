import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
// import Navigation from 'components/Navigation';
import AppBar from 'components/AppBar';

function Layout({ children }) {
  return (
    <div className={css.conteiner}>
      <AppBar />
      <Outlet />
    </div>
  );
}

export default Layout;
