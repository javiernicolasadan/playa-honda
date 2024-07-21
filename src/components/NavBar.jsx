import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { getTranslation } from "../services/localizationservice";
import Button from "react-bootstrap/Button";


const NavigationBar = ({ language, onLanguageChange }) => {
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
              {getTranslation("navbar.home", language)}
            </Nav.Link>
            <Link to="/gallery" className="nav-link" onClick={handleLinkClick}>
              {getTranslation("navbar.gallery", language)}
            </Link>
            <Link
              to="/activities"
              className="nav-link"
              onClick={handleLinkClick}
            >
              {getTranslation("navbar.activities", language)}
            </Link>
            <Link to="/booking" className="nav-link" onClick={handleLinkClick}>
              {getTranslation("navbar.booking", language)}
            </Link>
            <Link to="/weather" className="nav-link" onClick={handleLinkClick}>
            {getTranslation("navbar.weather", language)}
            </Link>
            <Button variant="light" onClick={() => onLanguageChange(!language)}>
              {language === "es" ?  "EN" : "ES" }              
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
