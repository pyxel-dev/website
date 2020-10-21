const Training = () => (
  <section className="block training">
    <article>
      <h2>Formations</h2>
      <p>Nous assurons des formations au sein de clients désireux de se former aux nouvelles technologies. Notre expertise couvre une large panel de compétences. Pour en savoir plus, contactez nous.</p>
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
    `}</style>
  </section>
);

export default Training;
