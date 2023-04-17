//react libraries
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Header from "./Header";

//styles
import "../styles/App.scss";

function App() {
  // STATES

  const [showMenu, setShowMenu] = useState(false);
  const [showName, setShowName] = useState(true);
  const [activeNav, setActiveNav] = useState("/Home");

  // HANDLER FUNCTIONS

  const handlerShowMenu = () => {
    setShowMenu(!showMenu);
    setShowName(!showName);
  };

  return (
    <>
      <Header
        handlerShowMenu={handlerShowMenu}
        showMenu={showMenu}
        showName={showName}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <main className="main">
        <Routes></Routes>
      </main>
    </>
  );
}

export default App;
