import React from "react";
import { IoEarth } from "react-icons/io5";


const Navbar = () => {
    return(
        <nav className="nav-container">
            <IoEarth className="nav-icon" />
            <h1>my travel journal.</h1>
        </nav>
    );
};

export default Navbar;