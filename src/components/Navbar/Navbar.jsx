import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar" data-aos="fade-down" data-aos-duration="800">
      <div className="nav-container">

        <nav className="nav-links">

          {/* NAVLINKS → React Router */}
          <NavLink to="/" end className="navlink">
            Home
          </NavLink>

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#events">Events</a>

         <a href="#gallery">Gallery</a>


          <a href="#testimonials">Testimonials</a>
          <a href="#videos">Videos</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;
