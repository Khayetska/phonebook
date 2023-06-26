import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

const { wrapper, title, text, link } = css;

function NotFound() {
  return (
    <div className={wrapper}>
      <h1 className={title}>404 Not found</h1>
      <p className={text}>
        Return to{' '}
        <Link to={'/'} className={link}>
          Home page
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
