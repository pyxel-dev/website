import { withTranslation } from "../i18n";

const ProjectView = ({ t }) => (
  <main>
    <section className="block">
    <h1>{t('header_project')}</h1>
    <article className="project">
        <a href="https://chaton.io" target="_blank">
          <img src="/project/chaton.png"
            alt="Chaton" decoding="async" />
          <h2>Chaton</h2>
          <p>{t('project_chaton_text')}</p>
        </a>
      </article>
      <article className="project">
        <a href="https://biorhythm.app" target="_blank">
          <img src="/project/biorhythm.png"
            alt="Biorhythm" decoding="async" />
          <h2>Biorhythm</h2>
          <p>{t('project_biorhythm_text')}</p>
        </a>
      </article>
    </section>

    <style jsx>{`
      :host {
        display: flex;
        flex-direction: column;
      }

      .block {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 10rem auto;
      }

      h1 {
        margin-bottom: 5rem;
      }

      .project {
        display: flex;
        flex-direction: column;
        border: thin solid #000;
        padding: 1rem;
        margin: 5rem auto 0;
      }

      .project:first-of-type {
        margin-top: 0;
      }

      .project a {
        text-decoration: none;
        color: inherit;
      }

      .project h2 {
        margin: 2rem;
      }

      .project:not(.coming) h2 {
        margin: 2rem auto .5rem;
      }
  `}</style>
  </main>
);

export default withTranslation('common')(ProjectView);
