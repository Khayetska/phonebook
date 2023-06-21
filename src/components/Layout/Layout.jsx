import css from './Layout.module.css';

function Layout({ children }) {
  return <div className={css.conteiner}>{children}</div>;
}

export default Layout;
