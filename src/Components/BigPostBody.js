import React from "react";
import { Link } from "react-router-dom";
import { importAll } from "../handlers";
import PropTypes from "prop-types";
import "./BigPostBody.css";

const BigPostBody = (props) => {
    const {
        title,
        category,
        textBeginning,
        textEnd,
        subtitle,
        src,
        alt,
        punchline,
        author,
        likedBy,
        comments,
        loggedIn,
        displayDate,
        writtenDate,
        displayTime
    } = props;

    const images = importAll(require.context("../assets", false, /.jpg/));
    console.log(src);

    return (
        <div className="bigPostContentDiv">
            <p className="writtenBy">Written by&nbsp;
                <span>
                    <Link 
                    exact 
                    to={`/blog-live/users/${author}`}
                    title={`See ${author}'s profile`}>
                        {author}
                    </Link>
                </span>&nbsp;
                <span>on</span>&nbsp;
                <span>{displayDate(writtenDate)}</span>
            </p>
            <div className="postBody">
                <p className="titleP">{title}</p>
                <p className="subtitle">{subtitle}</p>
                <img src={images[src]} alt={alt}/>
                <p>{textBeginning}</p>
                <p className="punchline">"{punchline}"</p>
                <p>{textEnd}</p>
            </div>
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
    textBeginning: PropTypes.string,
    textEnd: PropTypes.string,
    subtitle: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    punchline: PropTypes.string,
    author: PropTypes.string,
    likedBy: PropTypes.array,
    comments: PropTypes.number,
    loggedIn: PropTypes.string,
    displayDate: PropTypes.func,
    writtenDate: PropTypes.string,
    displayTime: PropTypes.func
};

export default BigPostBody;