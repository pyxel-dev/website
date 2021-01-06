import Header from "../components/header";
import Footer from "../components/footer";
import ProjectView from "../components/project-view";

export default function Training() {
  return (
    <>
      <Header />
      <ProjectView />
      <Footer />
      <style global jsx>{`
        .block {
          max-width: 994px;
        }
  `}</style>
    </>
  )
}
