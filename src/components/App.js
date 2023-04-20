//react libraries
import { Routes, Route } from "react-router-dom";

//components
import Header from "./Header";
import Inicio from "./Inicio";
import Conocenos from "./Conocenos";
import Catalogo from "./Catalogo";
import Contacto from "./Contacto";
import Footer from "./Footer";

//styles
import "../styles/App.scss";

function App() {
  // STATES

  // HANDLER FUNCTIONS

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Conocenos" element={<Conocenos />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
