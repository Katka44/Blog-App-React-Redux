import React from "react";
import "./Banner.css";

const Banner = (props) => {

    return (
        <div className="bannerDiv">
            <div className="bannerImg">          
                <img src="../public/assets/skyscrapers.jpg" />
            </div>
            <div className="bannerText">
                <p className="bigFont">Talking Tech.</p>
                <p className="slimFont">A BLOG ABOUT TECHNOLOGIES AND INNOVATIONS</p>
            </div>
        </div>
    );
}

export default Banner;