import Link from 'next/link';

const Training = () => (
  <section className="block training">
    <article>
      <h2>Formations</h2>
      <p>Nous assurons des formations au sein de clients désireux de se former aux nouvelles technologies. Notre expertise couvre une large panel de compétences. Pour en savoir plus, contactez nous.</p>
      <br />
      <p>Vous pouvez aussi vosu rendre sur la page Formations, afin de découvrir les formations en ligne que nous proposons.</p>
      <div>
        <Link href="/training"><a>Voir les formations</a></Link>
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

      div {
        display: flex;
        margin: 5rem auto 0;
      }

      a {
        color: #fff;
        padding: 1rem;
        border: thin solid #fff;
        text-decoration: none;
        transition: .3s ease-in-out all;
      }

      a:hover {
        background-color: #fff;
        color: #000;
      }
    `}</style>
  </section>
);

export default Training;
