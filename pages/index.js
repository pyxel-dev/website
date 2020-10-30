import Header from '../components/header';
import Presentation from '../components/presentation';
import Skill from '../components/skill';
import Work from '../components/work';
import Training from '../components/training';
import Contact from '../components/contact';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';

export default function Home() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes('success')) {
      setSuccess(true);
    }
  }, []);

  function close() {
    setSuccess(false);
  }

  return (
    <>
      {success && (
        <div className="success">
          <p>Votre message a bien été envoyé.</p>
          <button onClick={close} autoFocus>&times;</button>
        </div>
      )}
      <Header />
      <Presentation />
      <Skill />
      <Work />
      <Training />
      <Contact />
      <Footer />
      <style global jsx>{`
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

        .block:nth-of-type(even) {
          width: 100%;
          background-color: #000;
          color: #fff;
        }

        .success {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: block;
          background-color: green;
          color: #fff;
          padding: 1rem;
          text-align: center;
          width: 100%;
        }
        .success button {
          appearance: none;
          position: absolute;
          top: .75rem;
          right: 1rem;
          font-size: 2rem;
          border: none;
          background: none;
          color: #fff;
          cursor: pointer;
        }
  `}</style>
    </>
  )
}
