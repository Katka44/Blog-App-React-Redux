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
        <div className="loginWrapperDiv">
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
                <div className="rememberMeDiv">
                    <input type="checkbox" id="rememberMe"/>
                    <label for="rememberMe">Remember me</label>
                </div>
                
                <Button   
                   
                    type="button"
                    isLink="false"
                    text={buttonText}
                    handler={handleLogIn} />
                {signUpLine === "false" ? <p></p> : <p className="smallText">Don't have an account? <span onClick={goToSignUp}>Sign up</span></p>}
            </form>
            <p className="middle">OR</p>
            <div className="googleFacebookDiv">
                <div className="googleDiv">
                    <i class="fab fa-google"></i>
                    <p>Log In with Google</p>
                </div>
                <div className="facebookDiv">
                    <i class="fab fa-facebook-f"></i>
                    <p>Log In with Facebook</p>
                </div>
            </div>
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