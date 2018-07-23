import React from "react";
import avatar from "../assets/avatars.jpg";
import "./Header.css";

const Header = (props) => {

    return (
        <header>
            <div className="navigation">
                <p>HOME</p>
                <p>|</p>
                <p>BLOG</p>
                <p>|</p>
                <p>ABOUT</p>
            </div>            
            <div className="socialTop">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-linkedin-in"></i>
            </div>
            <div className="avatar">
                <img src={avatar} alt="profile avatar" />
            </div> 
        </header>
    );
}

export default Header;