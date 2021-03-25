import { withTranslation } from "../i18n";
import Subscribe from "./subscribe";

const Contact = ({ t }) => (
  <section className="block contact">
    <article>
      <h2>{t('contact_title')}</h2>
      <p>{t('contact_text')}</p>
      <div className="contact">
        <form name="contact" method="POST" action="/?success=true" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <section className="form-infos">
            <div>
              <label htmlFor="name">{t('contact_field_name')}</label>
              <input type="text" id="name" name="name" placeholder="Marty McFly" required />
            </div>
            <div>
              <label htmlFor="email">{t('contact_field_email')}</label>
              <input type="email" id="email" name="email" placeholder="back2future@cafe80.com" required />
            </div>
          </section>
          <section>
            <label htmlFor="message">{t('contact_field_message')}</label>
            <textarea id="message" name="message" placeholder="Ne soyez pas timide" required></textarea>
          </section>
          <button type="submit">{t('contact_submit')}</button>
        </form>
      </div>
    </article>
    <Subscribe />
    <style jsx>{`
      h2 {
        margin-bottom: 2rem;
      }

      .contact {
        display: flex;
        margin: 5rem auto;
      }

      article {
        text-align: center;
        margin: auto;
        max-width: 600px;
      }

      form {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .form-infos {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 2rem;
      }

      .form-infos div {
        width: 100%;
      }

      .form-infos div:first-of-type {
        margin-right: 2rem;
      }

      label,
      input,
      textarea {
        width: 100%;
        display: block;
        text-align: left;
      }

      label {
        margin-bottom: .5rem;
        font-weight: bold;
      }

      input,
      textarea {
        padding: 1rem;
        font-size: 1rem;
        font-family: sans-serif;
        appearance: none;
        border: thin solid #000;
      }

      textarea {
        min-width: 100%;
        max-width: 100%;
        min-height: 100px;
      }

      button {
        appearance: none;
        margin: 2rem auto 0;
        background: #fff;
        color: #000;
        padding: 1rem;
        border: thin solid #000;
        text-decoration: none;
        transition: .3s ease-in-out all;
        cursor: pointer;
      }

      button:hover {
        background-color: #000;
        color: #fff;
      }
    `}</style>
  </section>
);

export default withTranslation('common')(Contact);
