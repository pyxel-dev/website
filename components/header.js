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
    <style jsx>{`
      .header {
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;
      }
`}</style>
  </header>
);

export default Header;
