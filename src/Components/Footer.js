import React from "react";
import "./Footer.css";

const Footer = (props) => {
    const {

        } = props;

    return (
        <footer>
            <div className="social">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-linkedin-in"></i>
            </div>
            <div className="copyright">
                <small>© 2018 Talking Tech. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;