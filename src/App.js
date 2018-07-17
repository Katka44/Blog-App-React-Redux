import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Welcome from "./Components/Welcome";
import LogIn from "./Components/LogIn";
import Posts from "./Components/Posts";
import SmallPost from "./Components/SmallPost";
import NewPost from "./Components/NewPost";
import BigPost from "./Components/BigPost";
import UserPage from "./Components/UserPage";
import { getPosts, getUsers } from "./reducers/index";

import PropTypes from "prop-types";
import {  
    actionAddPost, 
    actionEditPost, 
    actionAddComment, 
    actionSortPosts, 
    actionLogIn, 
    actionLogOut,
    actionDeletePost,
    actionSignUp } from "./actions";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category: "",
            text: "",
            comment: "",
            username: "",
            password: "",
            isEditing: false,
            filter: "none",
            sorted: "none"
        }
    }

    makeSmallPost = (array) => {
        const { state } = this.props;

        const newArray = array.map((object, index) => {
            return <SmallPost 
                key={index}
                index={index}
                title={object.title}
                category={object.category}
                commentsCount={object.comments.length}
                likedBy={object.likedBy}
                loggedIn={getUsers(state).loggedIn}
            />
        });
        return newArray;
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleCommentSubmit = (e, index, author) => {
        if (e.keyCode === 13) {
            this.props.addComment(
                {
                    index: index,
                    author: author,
                    text: e.target.value
                }
            );
            this.setState({
                comment: ""
            });
        }
    }

    populateInputs = (index) => {
        const {
            state
        } = this.props;

        this.setState({
            title: getPosts(state)[index].title,
            category: getPosts(state)[index].category,
            text: getPosts(state)[index].text
        });
    }

    clearBigPostInputs = () => {
        this.setState({
            title: "",
            category: "",
            text: "",
            comment: ""
        });
    }

    clearLogin = () => {
        this.setState({
            username: "",
            password: ""
        });
    }

    goToSignUp = () => {
        this.props.history.push("/signUp");
    }

    handleSignUp = () => {
        if (this.state.username && this.state.password) {
            this.props.signUp({
                "username": this.state.username,
                "password": this.state.password,
                "favorites": []
            });
            this.props.history.push("/");
        } else {
            window.alert("Please enter username and password.");
        }
    }

    handleEdit = (index) => {
        this.populateInputs(index);
        this.setState({isEditing: true});
    }

    handleResetPost = () => {
        this.setState({isEditing: false});
        this.clearBigPostInputs();
    }

    handleSave = (index) => {

        const { state, editPost, addPost } = this.props;

        const {
            title,
            category,
            text,
            isEditing
        } = this.state;
        
        isEditing
            ? editPost(
                {
                    index: index,
                    title: title,
                    category: category,
                    text: text,
                    likedBy: getPosts(state)[index].likedBy,
                    comments: getPosts(state)[index].comments,
                    author: getUsers(state).loggedIn,
                    writtenDate: getPosts(state)[index].writtenDate
                }
            )
            : addPost(
                {
                    title: title,
                    category: category,
                    text: text,
                    likedBy: [],
                    comments: [],
                    author: getUsers(state).loggedIn,
                    writtenDate: new Date().toString()
                }
            )
        this.handleResetPost();
        this.props.history.push("/");
    }

    handleFilter = (filter) => {
        this.setState({filter});
    }

    handleSort = (array, property) => {
        if (property === "comments" || property === "likedBy") {
            const sortedArray = array.sort(
                function(a, b) {
                    return (a[property].length < b[property].length) 
                        ? 1 
                        : ((b[property].length < a[property].length) 
                            ? -1 
                            : 0);
                }
            );
            return sortedArray;
        } else if (property === "writtenDate") {
            const sortedArray = array.sort(
                function(a, b) {
                    const x = new Date(a.writtenDate);
                    const y = new Date(b.writtenDate);
                    return (x < y) 
                        ? 1 
                        : ((y < x)
                            ? -1 
                            : 0);
                }
            );
            return sortedArray;
        }
    }

    handleSorting = (array, property) => {
        const sortedArray = this.handleSort(array, property)
        this.props.sortPosts(sortedArray);
    }

    handleLatest = (array, property) => {
        const sortedArray = this.handleSort(array, property)
        this.props.sortPosts(sortedArray);
    }

    handleLogIn = () => {
        const {
            username,
            password
        } = this.state;

        if (username !=="" && password !== "") {
            this.props.logIn(
                {
                    username,
                    password
                }
            );
            this.clearLogin();            
        } else {
            window.alert("Please enter username and password.");
        }
    }

    handleLogOut = () => {
        this.props.logOut("none");
    }

    handleDelete = (index, cat) => {
        if (window.confirm("Are you sure?")) {
            this.props.deletePost({index, cat});
            this.props.history.push("/");
        };
    }

    render() {
        const {
            title,
            category,
            text,
            comment,
            username,
            password,
            isEditing,
            filter
        } = this.state;

        const {
            state
        } = this.props;
        console.log("App is coming");
        return (
            <div className="App">
                <h1>header</h1>
                <Router>
                    <Switch>
                        <Route 
                            exact 
                            path="/blog-live/signUp"

                            render={()=>{
                                return <LogIn 
                                    title="Please Sign Up"
                                    username={username}
                                    password={password}
                                    handleChange={this.handleChange}
                                    handleLogIn={this.handleSignUp}
                                    buttonText="Sign Up" />
                                }} 
                            />

                        <Route 
                            exact 
                            path="/blog-live/"

                            render={()=>{
                                return getUsers(state).loggedIn !== "null"
                                ? <Posts 
                                    makeSmallPost={this.makeSmallPost}
                                    filter={filter}
                                    handleFilter={this.handleFilter}
                                    handleSorting={this.handleSorting}
                                    handleLogOut={this.handleLogOut} 
                                    handleLatest={this.handleLatest} />
                                : <Welcome 
                                    makeSmallPost={this.makeSmallPost}
                                    handleSort={this.handleSort}
                                    username={username}
                                    password={password}
                                    handleChange={this.handleChange}
                                    handleLogIn={this.handleLogIn}
                                    clearLogin={this.clearLogin}
                                    goToSignUp={this.goToSignUp} />
                                }} 
                            />

                        {state.users.users.map(object => {
                            return (<Route 
                                key={getUsers(state).users.indexOf(object)} 
                                exact 
                                path={`/blog-live/users/${object.username}`}
                                render={()=>{ 
                                    return <UserPage 
                                        username={object.username}
                                        posts={getPosts(state)}
                                        handleSort={this.handleSort}
                                    /> 
                                }} 
                            />)
                        })}

                        <Route
                            exact 
                            path = "/blog-live/posts/newpost" 
                            render = {(props) => 
                                <NewPost 
                                    title={title}
                                    category={category}
                                    text={text}
                                    handleSave={this.handleSave}
                                    handleResetPost={this.handleResetPost}
                                    handleChange={this.handleChange}
                                />
                            }
                        />
                        {getPosts(state).map(object => {
                            return (<Route 
                                key={getPosts(state).indexOf(object)} 
                                exact 
                                path={`/blog-live/posts/${getPosts(state).indexOf(object)}`} 
                                render={()=>{
                                    return isEditing
                                    ? <NewPost 
                                        index={getPosts(state).indexOf(object)}
                                        title={title}
                                        category={category}
                                        text={text}
                                        handleSave={this.handleSave}
                                        handleResetPost={this.handleResetPost}
                                        handleChange={this.handleChange}
                                    />
                                    : <BigPost 
                                        index={getPosts(state).indexOf(object)}
                                        title={object.title}
                                        category={object.category}
                                        text={object.text}
                                        comment={comment}
                                        author={object.author}
                                        likedBy={object.likedBy}
                                        comments={object.comments}
                                        handleEdit={this.handleEdit}
                                        handleChange={this.handleChange}
                                        handleCommentSubmit={this.handleCommentSubmit}
                                        clearBigPostInputs={this.clearBigPostInputs}
                                        clearComment={this.clearComment}
                                        handleDelete={this.handleDelete}
                                        writtenDate={object.writtenDate}
                                    />
                                    }} 
                                />)
                            })
                        }
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: payload => dispatch(actionAddPost(payload)),
        editPost: payload => dispatch(actionEditPost(payload)),
        addComment: payload => dispatch(actionAddComment(payload)),
        sortPosts: payload => dispatch(actionSortPosts(payload)),
        logIn: payload => dispatch(actionLogIn(payload)),
        logOut: payload => dispatch(actionLogOut(payload)),
        deletePost: payload => dispatch(actionDeletePost(payload)),
        signUp: payload => dispatch(actionSignUp(payload))
    };
};

App.propTypes = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    editPost: PropTypes.func,
    addComment: PropTypes.func,
    sortPosts: PropTypes.func,
    logIn: PropTypes.func,
    logOut: PropTypes.func
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(App);