import css from './MainTitle.module.css';
// const { IoListCircleOutline } = require('react-icons/io5');

const { mainTitle } = css; // titleIcon

function MainTitle() {
  return (
    // <h1 className={mainTitle}>
    //   <span>Ph</span>
    //   <IoListCircleOutline className={titleIcon} />
    //   <span>nebook</span>
    // </h1>
    <h1 className={mainTitle}>Phonebook</h1>
  );
}

export default MainTitle;
