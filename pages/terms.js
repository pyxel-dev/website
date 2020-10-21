import Header from "../components/header";
import Term from "../components/term";
import Footer from "../components/footer";

export default function Terms() {
  return (
    <>
      <Header />
      <Term />
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
          max-width: 600px;
          margin: 10rem auto;
        }
  `}</style>
    </>
  )
}
