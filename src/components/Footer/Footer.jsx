import React from 'react';
import { AiFillGithub as Icon } from 'react-icons/ai';
import css from './Footer.module.css';

const { footer, footer_content, footer_txt, footer_link } = css;

function Footer() {
  return (
    <footer className={footer}>
      <div className={footer_content}>
        <Icon size={20} />
        <p className={footer_txt}>
          Made by{' '}
          <a
            href="https://github.com/Khayetska"
            target="_blank"
            rel="noreferrer"
            className={footer_link}
          >
            Khayetska
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
