import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import "./Comment.css";

const Comment = (props) => {
    const {
    text, 
    author 
    } = props;

    return (
        <div className="comment">
            <p className="commentText"><span><Link exact to={`/users/${author}`} title={`See ${author}'s profile`}>{author}</Link></span> {text}</p>
        </div>
    );
}

Comment.propTypes = {
    text: PropTypes.string,
    author: PropTypes.string
};

export default Comment;

