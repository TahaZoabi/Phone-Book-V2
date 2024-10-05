import ModalForm from "./components/ModalForm.jsx";
import ConfirmModal from "./components/ConfirmModal.jsx";
import Footer from "./components/Footer.jsx";
import { GlobalProvider } from "./utilis/Contexts/GlobalContext.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <GlobalProvider>
      <main>
        <section className="container">
          <Hero />
          <ModalForm />
          <ConfirmModal />
          <Footer />
        </section>
      </main>
    </GlobalProvider>
  );
}

export default App;
