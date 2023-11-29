import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
    <React.Fragment  >
        <nav className="buttonsNavBar navbar fixed-top bg-body-tertiary ">
            <Link to="/">
            <button className="navbar-toggler" type="button">Inicio</button>
            </Link>
            <Link to="/gallery" className="nav-link">
            <button className="navbar-toggler" type="button">Galería</button>
            </Link>
            <Link to="/activities">
            <button className="navbar-toggler" type="button">Actividades</button>
            </Link>
            <Link to="/availability">
            <button className="navbar-toggler" type="button">Disponibilidad</button>
            </Link>
            <Link to="/contact">
            <button className="navbar-toggler" type="button">Contacto</button>
            </Link>
            <Link to="/weather">
            <button className="navbar-toggler" type="button">El Tiempo</button>
            </Link>
        </nav>
    </React.Fragment> 
    );
}
 
export default NavBar;