import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import css from './Finder.module.css';
import styles from 'css/input.module.css';

const { finderTitle, finderInput } = css;

const Finder = () => {
  const dispatch = useDispatch();

  const handleFinderChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <h3 className={finderTitle}>Find contacts by name</h3>
      <input
        type="text"
        name="finder"
        onChange={handleFinderChange}
        className={`${styles.input} ${finderInput}`}
      ></input>
    </>
  );
};

export default Finder;
