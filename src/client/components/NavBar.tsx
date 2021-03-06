import * as React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC<NavBarProps> = () => {

    return (
        <nav className="nav justify-content-center shadow bg-warning p-3 mb-2">
            {/* <p>{location.pathname}</p> shows pathname on page on rerenders*/}
            <NavLink exact className="mx-5 font-weight-light" activeClassName="text-primary font-weight-bold" to="/">Home</NavLink>
            <NavLink className="mx-5 font-weight-light" activeClassName="text-primary font-weight-bold" to="/new">New Post</NavLink>
            <NavLink className="mx-5 font-weight-light" activeClassName="text-primary font-weight-bold" to="/login">Login</NavLink>
            <NavLink className="mx-5 font-weight-light" activeClassName="text-primary font-weight-bold" to="/donate">Donate</NavLink>
            <NavLink className="mx-5 font-weight-light" activeClassName="text-primary font-weight-bold" to="/contact">Contact</NavLink>
        </nav>
    );

}

interface NavBarProps {}

export default NavBar;