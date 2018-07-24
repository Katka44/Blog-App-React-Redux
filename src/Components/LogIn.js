import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "./LogIn.css";

const LogIn = (props) => {
    const {
        title,
        username,
        password,
        handleChange,
        handleLogIn,
        buttonText,
        goToSignUp,
        loggedIn,
        signUpLine
    } = props;

    return (
        <div>
            <form className="loginDiv" >
                <p>{title}</p>
                <input 
                    name="username"
                    value={username}
                    onChange={handleChange}
                    placeholder="Username"/>
                <input 
                    name="password" 
                    type="password" 
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"/>
                <Button   
                   
                    type="button"
                    isLink="false"
                    text={buttonText}
                    handler={handleLogIn} />
            </form>
            {signUpLine === "false" ? <p></p>: <p className="smallText">Don't have an account? <span onClick={goToSignUp}>Sign up</span></p>}
            
        </div>
    );
}

LogIn.propTypes = {
    title: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    handleChange: PropTypes.func,
    handleLogIn: PropTypes.func,
    buttonText: PropTypes.string,
    goToSignUp: PropTypes.func,
    loggedIn: PropTypes.string,
    signUpLine: PropTypes.string
};

export default LogIn;