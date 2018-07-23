import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SmallPost.css";

const SmallPost = (props) => {
    const {
            index,
            title,
            headline,
            category,
            commentsCount,
            likedBy,
            loggedIn,
            src,
            alt
        } = props;

    return (
        <Link exact to={`/blog-live/posts/${index}`} >
            <img src={src} alt={alt}/>
            <div className="postDiv">

                <h3>{title}</h3>
                <p className="headline">{headline}</p>
                <div className="smallPostBottom">
                    <p className="smallPostBottomP">{category}</p>
                    <div className="iconsDiv">
                        <i className="far fa-comment"></i>
                        <p>{commentsCount}</p>
                        <i className= {loggedIn === "null"
                            ? "far fa-heart" 
                            : likedBy.includes(loggedIn) 
                                ? "far fa-heart red"
                                : "far fa-heart"}>
                        </i>
                        <p>{likedBy.length}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

SmallPost.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    commentsCount: PropTypes.number,
    likedBy: PropTypes.array,
    loggedIn: PropTypes.string
};

export default SmallPost;