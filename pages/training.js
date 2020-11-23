import Header from "../components/header";
import TrainingView from "../components/training-view";
import Footer from "../components/footer";

export default function Training() {
  return (
    <>
      <Header />
      <TrainingView />
      <Footer />
      <style global jsx>{`
        .block {
          max-width: 600px;
        }
  `}</style>
    </>
  )
}
