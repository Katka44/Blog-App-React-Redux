import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
import Tags from "./Tags";
import PropTypes from "prop-types";
import "./Side.css";

const Side = (props) => {

    const {
        posts,
        users,
        loggedIn,
        handleLogOut,
        handleSorting,
        handleLatest,
        handleFilter    
    } = props;

    return (
        <div className="sideDiv">
            <div>
                <p className="username" title={`See your profile`}><Link exact to={`/users/${loggedIn}`}>{loggedIn}</Link></p>
                <p onClick={handleLogOut} className="pointer" title="Click to log out">Log Out</p>
            </div>
            <div className="postsSideDiv">
                <p 
                    onClick={() => {handleSorting(posts, "comments")}}
                    className="pointer"
                    title="Click to sort posts" >Most commented</p>
                <p 
                    onClick={() => {handleSorting(posts, "likedBy")}}
                    className="pointer"
                    title="Click to sort posts" >Most liked</p>
                <p 
                    onClick={() => {handleLatest(posts, "writtenDate")}}
                    className="pointer"
                    title="Click to sort posts" >Latest</p>
            </div>
            <p>Categories</p>
            <Tags handleFilter={handleFilter} posts={posts} />
            <p>Favorites</p>
            <Favorites 
                users={users.users}
                loggedIn={users.loggedIn} />
        </div>
    );
}

Side.propTypes = {
    posts: PropTypes.array,
    users: PropTypes.object,
    loggedIn: PropTypes.string,
    handleLogOut: PropTypes.func,
    handleSorting: PropTypes.func,
    handleLatest: PropTypes.func,
    handleFilter: PropTypes.func
};

export default Side;