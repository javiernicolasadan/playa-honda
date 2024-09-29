import { useState } from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
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
  /**
   * Handle the click event on a link in the navigation bar.
   *
   * When a link is clicked, we collapse the navbar if it is expanded on mobile.
   * This is because the navbar is only expanded on mobile when the user clicks
   * the hamburger menu, and it should be collapsed as soon as the user navigates
   * to a different page.
   */
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
        className="NavigationBar  bg-body-tertiary  m-0 navbar-expand-md-lg-xl-xxl sticky-top"
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
            <Link to="/apartment" className="nav-link" onClick={handleLinkClick}>
              {getTranslation("navbar.apartment", language)}
            </Link>
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
            {/*
            <Button
              variant="light"
              onClick={() => onLanguageChange(!language)}
              className="language-button"
            >
              {language === "es" ? "EN" : "ES"}
              {language === "es" ? (
                <img src="/gb.svg" alt="Descripción del SVG" />
              ) : (
                <img src="/es.svg" alt="Descripción del SVG" />
              )}
            </Button>
            */}
            <Dropdown onSelect={onLanguageChange}>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="language-button"
              >
                {language === "es" ? 
                  <img
                    src="/es.svg"
                    alt="spanish flag"
                    style={{ width: "20px", height: "20px" }}
                  />
                  : language === "en" ? 
                  <img
                    src="/gb.svg"
                    alt="british flag"
                    style={{ width: "20px", height: "20px" }}
                  />
                  : language === "fr" ?
                   <img
                    src="/fr.svg"
                    alt="french flag"
                    style={{ width: "20px", height: "15px" }}
                  />
                  : language === "nl" ?
                   <img
                    src="/nl.svg"
                    alt="dutch flag"
                    style={{ width: "20px", height: "20px" }}
                  /> 
                  :language === "de" ?
                   <img
                    src="/de.svg"
                    alt="german flag"
                    style={{ width: "20px", height: "20px" }}
                  />
                  : 
                   <img
                    src="/pt.svg"
                    alt="portuguese flag"
                    style={{ width: "20px", height: "20px" }}
                  />
                  }
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="es">
                  <img
                    src="/es.svg"
                    alt="spanish flag"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  Español
                </Dropdown.Item>
                <Dropdown.Item eventKey="en">
                  <img
                    src="/gb.svg"
                    alt="british flag"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  English
                </Dropdown.Item>
                <Dropdown.Item eventKey="fr">
                  <img
                    src="/fr.svg"
                    alt="french flag"
                    style={{ width: "20px", height: "15px" }}
                  />{" "}
                  Français
                </Dropdown.Item>
                <Dropdown.Item eventKey="nl">
                  <img
                    src="/nl.svg"
                    alt="dutch flag"
                    style={{ width: "20px", height: "15px" }}
                  />{" "}
                  Nederlands
                </Dropdown.Item>
                <Dropdown.Item eventKey="de">
                  <img
                    src="/de.svg"
                    alt="german flag"
                    style={{ width: "20px", height: "15px" }}
                  />{" "}
                  Deutsch
                </Dropdown.Item>
                <Dropdown.Item eventKey="pt">
                  <img
                    src="/pt.svg"
                    alt="portuguese flag"
                    style={{ width: "20px", height: "15px" }}
                  />{" "}
                  Português
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
