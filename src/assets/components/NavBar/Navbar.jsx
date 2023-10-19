import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
    <React.Fragment  >
    

        <nav className="buttonsNavBar navbar fixed-top bg-body-tertiary">
        <Link to="/">

        <button type="button" className=" navbar-toggler btn btn-light">Light</button>
        </Link>
        <Link to="/">
        <button className="navbar-toggler" type="button">Inicio</button>
        </Link>
        <Link to="/gallery" className="nav-link">
        <button className="navbar-toggler" type="button">Galería</button>
        </Link>
        <Link to="/carousel" className="nav-link">
        <button className="navbar-toggler" type="button">Carrusel</button>
        </Link>
        <Link to="/actividades">
        <button className="navbar-toggler" type="button">Actividades</button>
        </Link>
        <Link to="/contacto">
        <button className="navbar-toggler" type="button">Contacto</button>
        </Link>
         

        </nav>
        
        
    
    
  
  

    </React.Fragment> 
    );
}
 
export default NavBar;