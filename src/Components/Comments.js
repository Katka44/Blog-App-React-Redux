import React from "react";
import PropTypes from "prop-types";

const Comments = props => {
  const { makeComments, posts, index } = props;

  return <div className="commentsDiv">{makeComments(posts, index)}</div>;
};

Comments.propTypes = {
  makeComments: PropTypes.func,
  posts: PropTypes.array,
  index: PropTypes.number
};

export default Comments;
