import css from './MainTitle.module.css';
const { IoListCircleOutline } = require('react-icons/io5');

const { mainTitle, titleIcon } = css;

function MainTitle() {
  return (
    <h1 className={mainTitle}>
      <span>Ph</span>
      <IoListCircleOutline className={titleIcon} />
      <span>nebook</span>
    </h1>
  );
}

export default MainTitle;
