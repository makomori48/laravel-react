import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <Navbar>
            <RLink to="/">
                <Menu>HOME</Menu>
            </RLink>
            <RLink to="/add">
                <MenuAdd>ADD PLAYER</MenuAdd>
            </RLink>
        </Navbar>
    );
}

export default Nav;

const Navbar = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #342865;
    align-items: center;
    display: flex;
`;

const Menu = styled.h2`
    color: #e36d34;
    margin: 0;
    margin-left: 20%;
`;

const MenuAdd = styled.h2`
    color: #e36d34;
    margin: 0;
    margin-left: 8%;
`;

const RLink = styled(Link)`
    text-decoration:none;
    align-items: center;
    display: flex;
    width:15%;
`
