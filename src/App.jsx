import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import ContactList from "./components/ContactList.jsx";
import RotateButton from "./components/RotateButton.jsx";
import DeleteAllButton from "./components/DeleteAllButton.jsx";
import ModalForm from "./components/ModalForm.jsx";
import Confirm from "./components/Confirm.jsx";
import Footer from "./components/Footer.jsx";
import { GlobalProvider } from "./GlobalContext.jsx";

function App() {
  return (
    <GlobalProvider>
      <main>
        <section className="container">
          <Header />
          <Input />
          <ContactList />
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
