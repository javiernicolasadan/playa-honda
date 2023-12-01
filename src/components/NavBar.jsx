import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleNavbarToggle = () => {
    if (isMobile) {
      setExpanded(!expanded);
    }
  };
  const handleLinkClick = () => {
    if (isMobile) {
      setExpanded(false);
    }
  };

  return (
    <>
      <Navbar
        expand="sm"
        expanded={expanded}
        className="NavigationBar  bg-body-tertiary  m-0 navbar-expand-md-lg-xl-xxl"
      >
        <Navbar.Toggle onClick={handleNavbarToggle} />
        <Navbar.Collapse>
          <Nav
            className="navbar-nav-centered"
            style={{ fontWeight: "bold", fontSize: "125%" }}
          >
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Inicio
            </Nav.Link>
            <Link to="/gallery" className="nav-link" onClick={handleLinkClick}>
              Galería
            </Link>
            <Link
              to="/activities"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Actividades
            </Link>
            <Link
              to="/availability"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Disponibilidad
            </Link>
            <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
              Contacto
            </Link>
            <Link to="/weather" className="nav-link" onClick={handleLinkClick}>
              El Tiempo
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
