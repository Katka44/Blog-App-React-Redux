import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "./BigPostReactions.css";

const BigPostReactions = (props) => {
    const {
        index,
        comment,
        handleChange,
        handleCommentSubmit,
        handleLike,
        loggedIn,
        likedBy
    } = props;

    return (
        <div>
            {loggedIn !== "null"
                ? <div className="commentsLikes">
                <input 
                name="comment"
                placeholder="Write a comment"
                onChange={handleChange}
                onKeyUp={(e) => {handleCommentSubmit(e, index, loggedIn)}}
                value={comment} />
                <Button 
                    type="button"
                    isLink="false"
                    text="Like"
                    className={likedBy.includes(loggedIn) ? 'enabled' : ''}
                    title={likedBy.includes(loggedIn) ? 'Click to unlike' : 'Click to like'} 
                    handler={handleLike} />
            </div> 
                : <div></div> 
            }
        </div>
    );
}

BigPostReactions.propTypes = {
    index: PropTypes.number,
    comment: PropTypes.string,
    handleChange: PropTypes.func,
    handleCommentSubmit: PropTypes.func,
    handleLike: PropTypes.func,
    loggedIn: PropTypes.string,
    likedBy: PropTypes.array
};

export default BigPostReactions;