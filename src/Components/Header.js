import React from "react";
import avatar from "../assets/avatars.jpg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {

    return (
        <header>
            <div className="navigation">
                <Link exact to="/blog-live/"><p>HOME</p></Link>
                <p>|</p>
                <p>BLOG</p>
                <p>|</p>
                <p>ABOUT</p>
            </div>            
            <div className="socialTop">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="avatar">
                <img src={avatar} alt="profile avatar" />
            </div> 
        </header>
    );
}

export default Header;