const Training = () => (
  <section className="block training">
    <article>
      <h2>Formations</h2>
      <p>Nous assurons des formations au sein de clients désireux de se former aux nouvelles technologies. Notre expertise couvre une large panel de compétences. Pour en savoir plus, contactez nous.</p>
      <p>Vous pouvez aussi vous rendre sur notre site de formations en ligne <a href="https://code101.io" target="blank">Code101</a>, pour y retrouver toutes nos formations.</p>
      <div className="code101">
        <a href="https://code101.io" target="blank">
          <svg width="350px" height="50px" viewBox="0 0 3500 500" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g>
              <polygon id="c" fill="#17E24B" fill-rule="nonzero" points="0 500 500 500 500 400 100 400 100 100 500 100 500 0 0 0"></polygon>
              <path d="M600,0 L600,500 L1100,500 L1100,0 L600,0 Z M1000,400 L700,400 L700,100 L1000,100 L1000,400 Z" id="o" fill="#17E24B" fill-rule="nonzero"></path>
              <polygon id="d" fill="#17E24B" fill-rule="nonzero" points="1200 100 1600 100 1600 400 1200 400 1200 500 1700 500 1700 0 1200 0"></polygon>
              <polygon id="e" fill="#17E24B" fill-rule="nonzero" points="1800 500 2300 500 2300 400 1900 400 1900 300 2300 300 2300 200 1900 200 1900 100 2300 100 2300 0 1800 0"></polygon>
              <polygon id="1" fill="#0040FC" fill-rule="nonzero" points="2400 100 2500 100 2500 500 2600 500 2600 0 2400 0"></polygon>
              <path d="M2700,0 L2700,500 L3200,500 L3200,0 L2700,0 Z M3100,400 L2800,400 L2800,100 L3100,100 L3100,400 Z" id="0" fill="#0040FC" fill-rule="nonzero"></path>
              <polygon id="1" fill="#0040FC" fill-rule="nonzero" points="3300 0 3300 100 3400 100 3400 500 3500 500 3500 0"></polygon>
            </g>
          </svg>
        </a>
      </div>
    </article>
    <style jsx>{`
      article {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 600px;
        margin: 10rem auto;
        text-align: center;
      }

      h2 {
        margin-bottom: 2rem;
      }
      a {
        color: #0040FC;
      }
      a:hover {
        color: #17E24B;
      }
      .code101 {
        display: flex;
        margin: 5rem auto 0;
      }
    `}</style>
  </section>
);

export default Training;
