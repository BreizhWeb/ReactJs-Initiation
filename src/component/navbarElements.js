import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// css de la nav complete
export const Nav = styled.nav`
    background: #61DBFB;
    height: 85px;
    display: flex;
    z-index: 12;
`;

// css du contenu de la nav texte
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 4rem;
    height: 100%;
    &:hover {
    color: black;
    }
`;

// css du contenu de la nav compartiment
export const NavMenu = styled.div`
    display: flex;
    margin-left: 640px;
`;