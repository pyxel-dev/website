import Link from 'next/link';
import { withTranslation } from '../i18n';

const Training = ({ t }) => (
  <section className="block training">
    <article>
      <h2>{t('training_title')}</h2>
      <p>{t('training_text1')}</p>
      <br />
      <p>{t('training_text2')}</p>
      <div>
        <Link href="/training"><a>{t('training_button')}</a></Link>
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

export default withTranslation('common')(Training);
