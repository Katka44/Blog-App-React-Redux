import React from "react";
import mainImage from "../assets/innovations.jpg";
import "./Banner.css";

const Banner = (props) => {
    return (
        <div className="bannerDiv">
            <div className="bannerImg">          
                <img src={mainImage} alt="skyscrapers" />
            </div>
            <div className="bannerText">
                <p className="bigFont">Talking Tech.</p>
                <p className="slimFont">BLOG ABOUT TECHNOLOGIES AND INNOVATIONS</p>
            </div>
        </div>
    );
}

export default Banner;