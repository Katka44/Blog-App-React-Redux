import React from "react";
import { connect } from "react-redux";

import Side from "./Side";
import Button from "./Button";

import { getPosts, getUsers } from "../reducers/index";
import PropTypes from "prop-types";
import "./Posts.css";

const Posts = (props) => {

    const {
        makeSmallPost,
        filter,
        handleFilter,
        handleSorting,
        handleLogOut,
        handleLatest
    } = props;

    const { state } = props;

    const makeFilteredArray = (array, filter) => {
        if (filter !== "none") {
            const filteredArray = array.filter((object) => {
                return object.category === filter;
            });
            return filteredArray;
        }
        return array;
    };

    return (
        <div className="wrapperDiv">

        {/* 
            <Side
                posts={getPosts(state)}
                users={getUsers(state)}
                loggedIn={getUsers(state).loggedIn}
                handleLogOut={handleLogOut}
                handleSorting={handleSorting}
                handleLatest={handleLatest}
                handleFilter={handleFilter}  />

        */}

            <div className="mainDiv">
                <Button       
                    className="addNew"  
                    isLink="true"
                    to="/blog-live/posts/newpost"
                    text="Write New Post" />

                <div className="postsWrapper">{makeSmallPost(makeFilteredArray(getPosts(state), filter))}</div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

Posts.propTypes = {
    makeSmallPost: PropTypes.func,
    filter: PropTypes.string,
    handleFilter: PropTypes.func,
    handleSorting: PropTypes.func,
    handleLogOut: PropTypes.func,
    handleLatest: PropTypes.func
};

export default connect(
    mapStateToProps
)(Posts);