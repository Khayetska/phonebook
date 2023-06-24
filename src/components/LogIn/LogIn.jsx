import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import css from './LogIn.module.css';
import { Link } from 'react-router-dom';
import { logIn, registerUser } from 'redux/auth/authOperations';

const {
  login_wrapper,
  login_title,
  login_form,
  login_label,
  login_input,
  input_wrapper,
  login_button,
  toggle,
  toggle_link,
} = css;

function LogIn({ register = false }) {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = e.currentTarget.elements;

    if (register) {
      const newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
      };
      dispatch(registerUser(newUser));
      return;
    }

    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(user));
  };

  return (
    <>
      <Navigation accent />
      <div className={login_wrapper}>
        <h2 className={login_title}>{register ? 'Sign up' : 'Log in'}</h2>
        <form onSubmit={handleSubmit} className={login_form}>
          {register && (
            <div className={input_wrapper}>
              <label className={login_label} htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className={login_input}
                id="name"
                required
              />
            </div>
          )}
          <div className={input_wrapper}>
            <label className={login_label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              className={login_input}
              id="email"
              required
            />
          </div>
          <div className={input_wrapper}>
            <label className={login_label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              className={login_input}
              id="password"
              required
            />
          </div>
          <button type="submit" className={login_button}>
            {register ? 'Sign up' : 'Log in'}
          </button>
        </form>
        <p className={toggle}>
          {register ? (
            <>
              Already have an acount?{' '}
              <Link to="/login" className={toggle_link}>
                Log in
              </Link>
            </>
          ) : (
            <>
              Don't have an acount?{' '}
              <Link to="/register" className={toggle_link}>
                Sign up
              </Link>
            </>
          )}
        </p>
      </div>
    </>
  );
}

logIn.propTypes = {
  register: PropTypes.bool,
};

export default LogIn;
