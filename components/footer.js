import Link from 'next/link';
import { i18n, withTranslation } from '../i18n';
import PropTypes from 'prop-types';

const Footer = ({ t }) => (
  <footer>
    <div>
      <ul>
        <li>
          <a href="https://www.linkedin.com/company/pyxeldev" target="_blank">
            <i className="icon-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/pyxel-dev" target="_blank">
            <i className="icon-github"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/pyxeldev" target="_blank">
            <i className="icon-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/pyxeldev" target="_blank">
            <i className="icon-facebook"></i>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/terms">
            <a>{t('legal')}</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <span onClick={() => i18n.changeLanguage('en')}>EN</span>
          <> / </>
          <span onClick={() => i18n.changeLanguage('fr')}>FR</span>
        </li>
      </ul>
    </div>

    <style jsx>{`
      footer {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #000;
        color: #fff;
      }

      div {
        margin: 5rem auto;
      }

      ul {
        display: flex;
        justify-content: center;
      }

      li:not(:first-of-type) {
        margin-left: .5rem;
      }

      li a {
        padding: .5rem;
      }

      ul:nth-of-type(2) {
        margin: 1rem auto;
      }

      li:not(:first-of-type) {
        margin-left: 1rem;
      }



      li a,
      span {
        cursor: pointer;
        outline: none;
        text-decoration: none;
        color: #888;
        transition: .3s ease-in-out all;
      }

      li a:hover,
      li a:active,
      li a:focus,
      span:hover,
      span:active,
      span:focus {
        color: #fff;
      }

      i::before {
        transition: .3s ease-in-out all;
        color: #888;
      }

      li:hover i::before {
        color: #fff;
      }

      li:active i::before {
        color: #fff;
      }

      li:focus i::before {
        color: #fff;
      }
  `}</style>
  </footer >
);

export default withTranslation('common')(Footer);
