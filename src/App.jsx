import Header from "./components/Header.jsx";
import RotateButton from "./components/RotateButton.jsx";
import DeleteAllButton from "./components/DeleteAllButton.jsx";
import ModalForm from "./components/ModalForm.jsx";
import Confirm from "./components/Confirm.jsx";
import Footer from "./components/Footer.jsx";
import { GlobalProvider } from "./GlobalContext.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <GlobalProvider>
      <main>
        <section className="container">
          <Header />
          <Hero />
          <RotateButton />
          <DeleteAllButton />
          <ModalForm />
          <Confirm />
          <Footer />
        </section>
      </main>
    </GlobalProvider>
  );
}

export default App;
