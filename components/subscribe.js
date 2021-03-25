import React from 'react';
import { useTranslation } from '../i18n';

export default function Subscribe() {
  const { t } = useTranslation('common');
  const available = false;
  const TINYLETTER_URL = 'https://tinyletter.com/pyxel';

  const handleSubmit = (e) => {
    window.open(
      TINYLETTER_URL,
      'popupwindow',
      'scrollbars=yes,width=800,height=600'
    );
    return true;
  }

  return (
    <section className="subscribe">
      {available ?
        (
          <div className="available">{t('subscribe_available')}</div>
        ) : (
          <div className="available no">{t('subscribe_not_available')}</div>
        )
      }
      <p>{t('subscribe_note_first')}</p>
      <p className="note">{t('subscribe_note_second')}</p>
      <form
        method="post"
        target="popupwindow"
        action={TINYLETTER_URL}
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">{t('contact_field_email')}</label>
        <input
          id="tlemail"
          name="email"
          placeholder="you@awesomecompany.com"
          required
          type="email"
        />
        <button type="submit">{t('subscribe_stay_tuned')}</button>
      </form>
      <style jsx>{`
      .subscribe {
        text-align: center;
        margin: auto;
        max-width: 600px;
      }

      .available {
        margin-bottom: 5rem;
        padding: 2rem;
        font-size: 2rem;
        font-weight: bold;
        color: green;
        border: thin solid green;
        background-color: lightgreen;
      }

      .available.no {
        color: red;
        border: thin solid red;
        background-color: lightpink;
      }

      .note {
        font-weight: bold;
      }

      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
      }

      .form-infos {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 2rem auto;
      }

      form p {
        margin-top: 1rem;
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

      input {
        padding: 1rem;
        font-size: 1rem;
        font-family: sans-serif;
        appearance: none;
        border: thin solid #000;
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
}
