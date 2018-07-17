import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {

    const {
        type,
        isLink,
        to,
        text,
        handler,
        className
    } = props;

    return (
        <button type={type} onClick={handler} className={className}>
            {isLink === "true" ? <Link exact to={to}>{text}</Link> : text}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    isLink: PropTypes.string,
    to: PropTypes.string,
    text: PropTypes.string,
    handler: PropTypes.func,
    className: PropTypes.string
};

export default Button;