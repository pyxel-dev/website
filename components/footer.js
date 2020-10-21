import Link from 'next/link';

const Footer = () => (
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
            <a>Mentions légales</a>
          </Link>
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

      ul:last-of-type {
        margin-top: 1rem;
      }

      li:not(:first-of-type) {
        margin-left: 1rem;
      }



      li a {
        outline: none;
        text-decoration: none;
        color: #888;
        transition: .3s ease-in-out all;
      }

      li:hover,
      li:active,
      li:focus {
        color: #fff;
      }

      i::before {
        transition: .3s ease-in-out all;
        color: #888;
      }
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

export default Footer;
