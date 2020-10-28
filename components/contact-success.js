const ContactSuccess = () => (
  <main>
    <section className="block">
      <h1>Votre message a été envoyé</h1>
      <p>Merci de votre message. Nous tâcherons de vous répondre au plus vite.</p>
    </section>

    <style jsx>{`
      main {
        display: flex;
        flex-direction: column;
      }
      .block {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 600px;
        margin: 10rem auto;
      }
      p {
        margin-top: 2rem;
      }
  `}</style>
  </main>
);

export default ContactSuccess;
