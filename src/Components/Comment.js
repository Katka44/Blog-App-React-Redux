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
            <p className="commentText">
                {text}
                <span> 
                    <Link 
                        exact 
                        to={`/Blog-App-React-Redux/users/${author}`}
                        title={`See ${author}'s profile`}>
                            {author}
                    </Link>
                </span> 
            </p>
        </div>
    );
}

Comment.propTypes = {
    text: PropTypes.string,
    author: PropTypes.string
};

export default Comment;

