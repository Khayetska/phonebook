import preview from 'images/preview.png';
import css from './Preview.module.css';

const { preview_title, preview_img, preview_appeal } = css;

export default function Preview() {
  return (
    <>
      <p className={preview_title}>Here's a preview of our app</p>
      <img src={preview} alt="preview of the app" className={preview_img} />
      <p className={preview_appeal}>
        Join us to make finding the right contacts easier
      </p>
    </>
  );
}
