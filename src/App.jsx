import Header from "./components/Header.jsx";
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
          <ModalForm />
          <Confirm />
          <Footer />
        </section>
      </main>
    </GlobalProvider>
  );
}

export default App;
