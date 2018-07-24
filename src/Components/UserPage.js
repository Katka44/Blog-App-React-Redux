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
                return <div className="post"><SmallPost 
                key={index}
                index={index}
                title={object.title}
                headline={object.headline}
                category={object.category}
                commentsCount={object.comments.length}
                likedBy={object.likedBy}
                src={object.image}
                alt={object.alt}
                /></div>
            }
        });
        return newArray;
    }

    return (
        <div className="userPage">
            {makeUserPosts(posts)}
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