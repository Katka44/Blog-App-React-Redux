import React from "react";
import { connect } from "react-redux";
import SmallPost from "./SmallPost";
import Button from "./Button";
import PropTypes from "prop-types";
import "./UserPage.css";

const UserPage = (props) => {

    const { username, posts, loggedIn } = props;

    const makeUserPosts = (array) => {
        const newArray = array.map((object, index) => {
            if (object.author === username) {
                return <div className="post"><SmallPost 
                key={index}
                id={object.id}
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

    const howManyPosts = (username, posts) => {
        const postsArray = posts.filter((object) => {
            object.author === username;
        })
        return postsArray.length;
    }
    console.log(howManyPosts("", posts));

    return (
        <div className="userPage">
        <p className="left"></p>
            {((loggedIn !== "null") && (loggedIn === username)) ? <Button       
                className="addNew"  
                isLink="true"
                to="/blog-live/posts/newpost"
                text="Write New Post" /> : <p></p>}
            
            {loggedIn === "null" ? <h3>{`${username}'s Posts`}</h3> : username === loggedIn ? <h3>Your Posts</h3> : <h3>{`${username}'s Posts`}</h3>}
            {makeUserPosts(posts)}
            {howManyPosts(username, posts) === 0 ? <div className="emptyDiv"></div> : <div></div>}
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
    posts: PropTypes.array,
    loggedIn: PropTypes.string
};

export default connect(
    mapStateToProps
)(UserPage);