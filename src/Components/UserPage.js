import React from "react";
import { connect } from "react-redux";
import SmallPost from "./SmallPost";
import PropTypes from "prop-types";
import "./UserPage.css";

const UserPage = (props) => {

    const { username, posts } = props;

    const makeUserPosts = (array) => {
        const newArray = array.map((object, index) => {
            if (object.author === username) {
                return <SmallPost 
                    key={index}
                    index={index}
                    title={object.title}
                    category={object.category}
                    commentsCount={object.comments.length}
                    likedBy={object.likedBy}

                />
            }
        });
        return newArray;
    }

    return (
        <div className="userPage">
            <h3>Hello, I am {username}</h3>
            <div className="posts">{makeUserPosts(posts)}</div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

UserPage.propTypes = {
    username: PropTypes.string,
    posts: PropTypes.array
};

export default connect(
    mapStateToProps
)(UserPage);