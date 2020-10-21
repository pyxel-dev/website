import Header from '../components/header';
import Presentation from '../components/presentation';
import Skill from '../components/skill';
import Work from '../components/work';
import Training from '../components/training';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
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
  `}</style>
    </>
  )
}
