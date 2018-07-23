import React from "react";
import Banner from "./Banner";
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
                <img src="../assets/avatars.jpg" />
            </div> 
            <Banner />
        </header>
    );
}

export default Header;