import React from "react";
import { connect } from "react-redux";
import LogIn from "./LogIn";
import Banner from "./Banner";
import PropTypes from "prop-types";
import "./Welcome.css";

const Welcome = (props) => {
    const {
        makeSmallPost,
        handleSort,
        username,
        password,
        handleChange,
        handleLogIn,
        goToSignUp
    } = props;

    const {
        posts
    } = props.state;

    return (
        <div className="wrapperDiv">
            <div className="mainDiv">
            {/*
                <h1>Welcome</h1>
                <LogIn 
                    title="Please Log In"
                    username={username}
                    password={password}
                    handleChange={handleChange}
                    handleLogIn={handleLogIn}
                    buttonText="Log In" />
                <p className="smallText">Don't have an account? <span onClick={goToSignUp}>Sign up</span></p>

            */}
                <Banner />
                <div className="postsWrapper">{makeSmallPost(handleSort(posts, "writtenDate").slice(0, 6))}</div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

Welcome.propTypes = {
    makeSmallPost: PropTypes.func,
    handleSort: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string,
    handleChange: PropTypes.func,
    handleLogIn: PropTypes.func,
    goToSignUp: PropTypes.func
};

export default connect(
    mapStateToProps
)(Welcome);