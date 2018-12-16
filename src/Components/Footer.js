import React from "react";
import "./Footer.css";

const Footer = props => {
  const socials = [
    {
      className: "fab fa-facebook-f"
    },
    {
      className: "fab fa-twitter"
    },
    {
      className: "fab fa-google-plus-g"
    },
    {
      className: "fab fa-linkedin-in"
    }
  ];
  return (
    <footer>
      <div className="social">
        {socials.map(item => {
          return <i className={item.className} />;
        })}
      </div>
      <div className="copyright">
        <small>© 2018 Talking Tech. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
