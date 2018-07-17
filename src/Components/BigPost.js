import React from "react";
import { connect } from "react-redux";

import BigPostHeader from "./BigPostHeader";
import BigPostBody from "./BigPostBody";
import BigPostReactions from "./BigPostReactions";
import Comment from "./Comment";
import Comments from "./Comments";

import PropTypes from "prop-types";
import { actionToggleLike } from "../actions";
import { getPosts, getUsers } from "../reducers/index";
import "./BigPost.css";

const BigPost = (props) => {
    const {
        index,
        title,
        category,
        text,
        comment,
        author,
        likedBy,
        comments,
        handleEdit,
        handleChange,
        handleCommentSubmit,
        clearBigPostInputs,
        handleDelete,
        writtenDate
    } = props;

    const { state } = props;

    const cat = getPosts(state)[index].category;

    const makeComments = (array, index) => {
        return array[index].comments.map((object, commentIndex) => {
            return <Comment 
                key={commentIndex}
                text={object.text}
                author={object.author} />
        });
    };

    const handleLike = () => {
        props.toggleLike({index, name: getUsers(state).loggedIn});
    }

    const displayDate = (string) => {
        const fullDate = new Date(string);
        return fullDate.toLocaleDateString();
    }

    const displayTime = (string) => {
        const fullDate = new Date(string);
        return fullDate.toLocaleTimeString();
    }

    return (
        <div className="bigPostDiv">

            <BigPostHeader
                posts={getPosts(state)}
                clearBigPostInputs={clearBigPostInputs}
                loggedIn={getUsers(state).loggedIn}
                author={author}
                handleEdit={handleEdit}
                index={index}
                handleDelete={handleDelete}
                cat={cat} />

            <BigPostBody 
                title={title}
                category={category}
                text={text}
                author={author}
                likedBy={likedBy}
                comments={comments.length}
                loggedIn={getUsers(state).loggedIn}
                displayDate={displayDate}
                writtenDate={writtenDate}
                displayTime={displayTime}
            />

            <BigPostReactions 
                index={index}
                comment={comment}
                handleChange={handleChange}
                handleCommentSubmit={handleCommentSubmit}
                handleLike={handleLike}
                loggedIn={getUsers(state).loggedIn}
                likedBy={likedBy}
            />
               
            <Comments 
                makeComments={makeComments}
                posts={getPosts(state)}
                index={index}
            />

        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLike: payload => dispatch(actionToggleLike(payload))
    };
};

BigPost.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    text: PropTypes.string,
    comment: PropTypes.string,
    author: PropTypes.string,
    likeCount: PropTypes.number,
    comments: PropTypes.array,
    handleEdit: PropTypes.func,
    handleChange: PropTypes.func,
    handleCommentSubmit: PropTypes.func,
    clearBigPostInputs: PropTypes.func,
    handleDelete: PropTypes.func,
    writtenDate: PropTypes.string
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BigPost);