import React from "react";
import avatar from "../assets/avatars.jpg";
import Tags from "./Tags";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

const Header = (props) => {

    const {
        loggedIn,
        handleLogOut,
        handleFilter,
        posts,
        handleLatest
    } =props;
    return (
        <header>
            <div className="navigation">
                <Link exact to="/blog-live/"><p>HOME</p></Link>
                <p>|</p>
                <p 
                onClick={() => {handleLatest(posts, "writtenDate")}}
                className="pointer"
                title="Sort posts" >LATEST</p>
                <p>|</p>
                <Tags handleFilter={handleFilter} posts={posts} />
            </div>            
            <div className="socialTop">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="avatar">
                <Link exact to={`/blog-live/users/${loggedIn}`} className="username"><img src={avatar} alt="profile avatar" title={`See your profile`}/></Link>

                <p onClick={handleLogOut} className="pointer">LOG OUT</p>
            </div>
        </header>
    );
}

Header.propTypes = {
    posts: PropTypes.array,
    loggedIn: PropTypes.string,
    handleLogOut: PropTypes.func,
    handleSorting: PropTypes.func,
    handleLatest: PropTypes.func,
    handleFilter: PropTypes.func
};

export default Header;