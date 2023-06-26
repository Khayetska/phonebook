import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import css from './Finder.module.css';
import styles from 'css/input.module.css';

const { finder_title, finder_input } = css;

const Finder = () => {
  const dispatch = useDispatch();

  const handleFinderChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <h3 className={finder_title}>Find contacts by name</h3>
      <input
        type="text"
        name="finder"
        onChange={handleFinderChange}
        className={`${styles.input} ${finder_input}`}
      ></input>
    </>
  );
};

export default Finder;
