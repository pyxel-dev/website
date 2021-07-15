import { withTranslation } from "../i18n";

const Skill = ({ t }) => (
  <section className="block skill">
    <article>
      <h2>{t('skills_title')}</h2>
      <p>{t('skills_text')}</p>
    </article>
    <ul>
      <li>
        <i className="icon-html5"></i>
        <span>HTML</span>
      </li>
      <li>
        <i className="icon-css3"></i>
        <span>CSS</span>
      </li>
      <li>
        <i className="icon-javascript"></i>
        <span>JavaScript</span>
      </li>
      <li>
        <i className="icon-angular"></i>
        <span>Angular</span>
      </li>
      <li>
        <i className="icon-react"></i>
        <span>React</span>
      </li>
      <li>
        <i className="icon-next-dot-js"></i>
        <span>NextJS</span>
      </li>
      <li>
        <i className="icon-node-dot-js"></i>
        <span>NodeJS</span>
      </li>
      <li>
        <i className="icon-typescript"></i>
        <span>TypeScript</span>
      </li>
      <li>
        <i className="icon-babel"></i>
        <span>Babel</span>
      </li>
      <li>
        <i className="icon-webpack"></i>
        <span>Webpack</span>
      </li>
      <li>
        <i className="icon-ionic"></i>
        <span>Ionic</span>
      </li>
      <li>
        <i className="icon-mongodb"></i>
        <span>MongoDB</span>
      </li>
      <li>
        <i className="icon-graphql"></i>
        <span>GraphQL</span>
      </li>
      <li>
        <i className="icon-amazonaws"></i>
        <span>AWS</span>
      </li>
      <li>
        <i className="icon-mysql"></i>
        <span>MySQL</span>
      </li>
      <li>
        <i className="icon-postgresql"></i>
        <span>Postgre SQL</span>
      </li>
      <li>
        <i className="icon-sketch"></i>
        <span>Sketch</span>
      </li>
      <li>
        <i className="icon-adobephotoshop"></i>
        <span>Photoshop</span>
      </li>
      <li>
        <i className="icon-adobeillustrator"></i>
        <span>Illustrator</span>
      </li>
      <li>
        <i className="icon-git"></i>
        <span>Git</span>
      </li>
      <li>
        <i className="icon-github"></i>
        <span>Github</span>
      </li>
      <li>
        <i className="icon-gitlab"></i>
        <span>Gitlab</span>
      </li>
      <li>
        <i className="icon-bootstrap"></i>
        <span>Bootstrap</span>
      </li>
      <li>
        <i className="icon-swift"></i>
        <span>Swift</span>
      </li>
      <li>
        <i className="icon-wordpress"></i>
        <span>Wordpress</span>
      </li>
    </ul>
    <style jsx>{`
      article {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 600px;
        margin: 10rem auto 5rem;
        text-align: center;
      }

      h2 {
        margin-bottom: 2rem;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        max-width: 600px;
        margin: 0 auto 10rem;
      }

      li {
        flex: 0 0 auto;
        width: 20%;
        text-align: center;
      }

      li:nth-of-type(n+6) {
        margin-top: 2rem;
      }

      @media(max-width: 640px) {
        li {
          width: calc(100% / 3);
        }

        li:nth-of-type(n+4) {
          margin-top: 2rem;
        }
      }

      i {
        font-size: 2rem;
      }

      span {
        margin-top: .5rem;
        font-size: .75rem;
        display: block;
      }
  `}</style>
  </section>
);

export default withTranslation('common')(Skill);
