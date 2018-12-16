import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import { getPosts } from "../reducers/index";
import { makeFilteredArray } from "../handlers";
import PropTypes from "prop-types";
import "./Posts.css";

const Posts = props => {
  const { makeSmallPost, filter } = props;

  const { state } = props;

  return (
    <div className="wrapperDiv">
      <div className="mainDiv">
        <Button
          className="addNew"
          isLink="true"
          to="/Blog-App-React-Redux/posts/newpost"
          text="Write New Post"
        />

        <div className="postsWrapper">
          {makeSmallPost(makeFilteredArray(getPosts(state), filter))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

Posts.propTypes = {
  makeSmallPost: PropTypes.func,
  filter: PropTypes.string,
  handleFilter: PropTypes.func,
  handleSorting: PropTypes.func,
  handleLogOut: PropTypes.func,
  handleLatest: PropTypes.func
};

export default connect(mapStateToProps)(Posts);
