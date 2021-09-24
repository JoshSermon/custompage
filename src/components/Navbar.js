import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';

const NavBar = () => {

    return (
        <Navbar>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Pictures</NavLink>
                <NavLink to="/">Potraits</NavLink>
                <NavLink to="/">Contact</NavLink>
            </Nav>
        </Navbar>
    )
};

export default Navbar
