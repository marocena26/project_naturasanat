//react libraries
import { NavLink } from "react-router-dom";
//components

//styles
import "../styles/components/Header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <NavLink to="/" className="link header__title--item">
          Natura Sanat
        </NavLink>
      </h1>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--list--item">
            <NavLink to="/" className="link item__hover">
              {" "}
              Inicio{" "}
            </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink to="Conocenos" className="link item__hover">
              Conócenos
            </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink to="/Catalogo" className="link item__hover">
              {" "}
              Catálogo{" "}
            </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink to="/Contacto" className="link item__hover">
              {" "}
              Contacto{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
