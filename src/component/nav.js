import React from "react";
import {
    Nav,
    NavLink,
    NavMenu
} from "./navbarElements";
const Navbar = () => {
    // routes des différents component lié aux lien de la nav
    return (
        <>
           <Nav>
            <NavMenu>
                <NavLink 
                  to="/accueil" 
                  activeStyle={{ color:'black' }}
                >
                    Accueil
                </NavLink>
                <NavLink 
                  to="/user" 
                  activeStyle={{ color:'black' }}
                >
                    User
                </NavLink>
                <NavLink 
                  to="/auteur" 
                  activeStyle={{ color: 'black' }}
                >
                    Auteur
                </NavLink>
                <NavLink 
                  to="/genre" 
                  activeStyle={{ color: 'black' }}
                >
                    Genre
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;