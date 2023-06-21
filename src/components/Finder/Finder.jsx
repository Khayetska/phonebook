import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Finder.module.css';

const Finder = () => {
  const dispatch = useDispatch();

  const handleFinderChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <h3 className={css.finderTitle}>Find contacts by name</h3>
      <input type="text" name="finder" onChange={handleFinderChange}></input>
    </>
  );
};

export default Finder;
