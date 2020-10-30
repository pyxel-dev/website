const Contact = () => (
  <section className="block contact">
    <article>
      <h2>Nous contacter</h2>
      <p>On peut commencer par faire connaissance. Si vous avez une mission qui vaille le coup sur Toulouse ou en remote, n'héistez pas à nous contacter. Et si vous souhaitez dispenser une formation, c'est au même endroit.</p>
      <div className="contact">
        <form name="contact" method="POST" action="/?success=true" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
          <section className="form-infos">
            <div>
              <label htmlFor="name">Votre nom</label>
              <input type="text" id="name" name="name" placeholder="Marty McFly" required />
            </div>
            <div>
              <label htmlFor="email">Votre email</label>
              <input type="email" id="email" name="email" placeholder="back2future@cafe80.com" required />
            </div>
          </section>
          <section>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Ne soyez pas timide" required></textarea>
          </section>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </article>
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

export default Contact;
