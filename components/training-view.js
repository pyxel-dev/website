
const TrainingView = () => (
  <main>
    <section className="block">
    <h1>Formations</h1>
      <article className="training">
        <a href="https://www.udemy.com/course/decouverte-angular/?referralCode=468BDCCD8BBF06E2737A" target="_blank">
          <img src="/training/decouverte_angular.png"
            alt="A la découverte d'Angular" decoding="async" />
          <h2>À la découverte d'Angular</h2>
          <p>Découvrez notre première formation dédiée à Angular. Apprenez tout ce dont vous avez besoin pour créer vos sites et applications à travers plus de 30 cours et plus de 9h de formation.</p>
        </a>
      </article>
      <article className="training coming">
        <h2>D'autres formations sont à venir prochainement</h2>
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

      .training {
        display: flex;
        flex-direction: column;
        border: thin solid #000;
        padding: 1rem;
        margin: 5rem auto 0;
      }

      .training:first-of-type {
        margin-top: 0;
      }

      .coming {
        width: 100%;
        border: thin dashed #bbb;
        color: #bbb;
        text-align: center;
      }

      .training a {
        text-decoration: none;
        color: inherit;
      }

      .training h2 {
        margin: 2rem;
      }

      .training:not(.coming) h2 {
        margin: 2rem auto .5rem;
      }
  `}</style>
  </main>
);

export default TrainingView;
