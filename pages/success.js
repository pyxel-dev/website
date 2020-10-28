import Header from "../components/header";
import ContactSuccess from "../components/contact-success";
import Footer from "../components/footer";

export default function Terms() {
  return (
    <>
      <Header />
      <ContactSuccess />
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
