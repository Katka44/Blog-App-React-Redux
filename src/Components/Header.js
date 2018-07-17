import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {

    const {
        handleLogOut,
        users
    } = props

    return (
        <header>
            <p className="username" title="Profile"><Link exact to={`/blog-live/users/${users.loggedIn}`}>{users.loggedIn}</Link></p>
            <p onClick={handleLogOut} >Log Out</p>
        </header>
    );
}

Header.propTypes = {

};

export default Header;