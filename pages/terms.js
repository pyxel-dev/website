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
          max-width: 600px;
        }
  `}</style>
    </>
  )
}
