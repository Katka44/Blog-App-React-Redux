import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return (
        <footer>
            <div className="social">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="copyright">
                <small>© 2018 Talking Tech. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;