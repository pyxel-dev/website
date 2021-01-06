
const ProjectView = () => (
  <main>
    <section className="block">
    <h1>Projets</h1>
      <article className="project">
        <a href="https://chaton.io" target="_blank">
          <img src="/project/chaton.png"
            alt="Chaton" decoding="async" />
          <h2>Chaton</h2>
          <p>Chaton est une web app de chat vidéo en 1:1. Elle est complètement open source, et repose sur le standard WebRTC qui fournit une connexion peer-to-peer (P2P). Vous pouvez créer une salle et partager son ID avec une autre personne pour discuter via vidéo. Il n'y a pas de système de login, le but étant de créer une conversation vidéo rapidement.</p>
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

export default ProjectView;
