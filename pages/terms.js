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
        .block {
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 10rem auto;
          max-width: 600px;
        }
  `}</style>
    </>
  )
}
