import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./BigPostBody.css";

const BigPostBody = (props) => {
    const {
        title,
        category,
        text,
        author,
        likedBy,
        comments,
        loggedIn,
        displayDate,
        writtenDate,
        displayTime
    } = props;

    return (
        <div className="bigPostContentDiv">
            <div className="postBody">
                <p>Title: {title}</p>
                <p>Category: {category}</p>
                <p>{text}</p>
            </div>
            <p className="writtenBy">Written by 
                <span>
                    <Link 
                    exact 
                    to={`/blog-live/blog-live/users/${author}`}
                    title={`See ${author}'s profile`}>
                        {author}
                    </Link>
                </span>
                <span>on </span>
                <span>{displayDate(writtenDate)}</span>
                <span> at </span>
                <span>{displayTime(writtenDate)}</span> 
            </p>
            <div className="commentsLikesCount">
                <i className="far fa-comment"></i>
                <p>{comments}</p>
                <i className= {loggedIn === "null"
                    ? "far fa-heart" 
                    : likedBy.includes(loggedIn) 
                        ? "far fa-heart red"
                        : "far fa-heart"}>
                </i>
                <p>{likedBy.length}</p>
            </div>
        </div>
    );
}

BigPostBody.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    text: PropTypes.string,
    author: PropTypes.string,
    likedBy: PropTypes.array,
    comments: PropTypes.number,
    loggedIn: PropTypes.string,
    displayDate: PropTypes.func,
    writtenDate: PropTypes.string,
    displayTime: PropTypes.func
};

export default BigPostBody;