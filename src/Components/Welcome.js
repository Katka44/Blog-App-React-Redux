import React from "react";
import { connect } from "react-redux";
import Banner from "./Banner";
import { makeFilteredArray } from "../handlers";
import PropTypes from "prop-types";
import "./Welcome.css";

const Welcome = (props) => {
    const {
        makeSmallPost,
        posts,
        filter
    } = props;

    return (
        <div className="wrapperDiv">
            <Banner />
            <div className="mainDiv">
                <div className="postsWrapper">{makeSmallPost(makeFilteredArray(posts, filter))}</div>
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
    goToSignUp: PropTypes.func,
    posts: PropTypes.array,
    filter: PropTypes.string
};

export default connect(
    mapStateToProps
)(Welcome);