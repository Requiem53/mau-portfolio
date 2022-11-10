import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">MT</h1>
      <div className="nav-links">
        <NavLink to="mau-portfolio/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="mau-portfolio/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="mau-portfolio/about" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
