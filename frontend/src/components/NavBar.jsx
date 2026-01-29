import { NavLink } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>Party Time!</h2>
      <ul>
        <li>
          <NavLink to={"/"}>Minhas Festas</NavLink>
        </li>
        <li>
          <NavLink to={"/party/new"} className="btn">
            Criar Festas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
