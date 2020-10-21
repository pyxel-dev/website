import Link from 'next/link';

const Header = () => (
  <header className="header" role="heading">
    <a href="/">
      <figure>
        <svg width="50px" height="50px" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M100,100 L200,100 L200,200 L100,200 L100,100 Z M200,200 L300,200 L300,300 L200,300 L200,200 Z M300,100 L400,100 L400,200 L300,200 L300,100 Z M100,300 L200,300 L200,400 L100,400 L100,300 Z">
            </path>
          </g>
        </svg>
      </figure>
    </a>
    <nav role="navigation">
      <ul>
        <li><Link href="/projects"><a>Projects</a></Link></li>
        <li><Link href="/courses"><a>Courses</a></Link></li>
      </ul>
    </nav >
    <style jsx>{`
      .header {
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;
      }

      nav > ul {
        display: flex;
      }

      li:not(:first-of-type) {
        margin-left: 1rem;
      }

      a {
        font-family: 'heading';
        text-transform: uppercase;
        color: #ccc;
        text-decoration: none;
        transition: all .3s ease-in-out;
      }

      a:hover,
      a.active {
        color: #000;
      }
`}</style>
  </header >
);

export default Header;
