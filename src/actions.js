export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const SORT_POSTS = "SORT_POSTS";
export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP = "SIGN_UP";

export const actionAddPost = (payload) => {
    return { type: ADD_POST, payload };
};

export const actionDeletePost = (payload) => {
    return { type: DELETE_POST, payload };
};

export const actionEditPost = (payload) => {
    return { type: EDIT_POST, payload };
};

export const actionAddComment = (payload) => {
    return { type: ADD_COMMENT, payload };
};

export const actionSortPosts = (payload) => {
    return { type: SORT_POSTS, payload };
};

export const actionToggleLike = (payload) => {
    return { type: TOGGLE_LIKE, payload };
};

export const actionLogIn = (payload) => {
    return { type: LOG_IN, payload };
};

export const actionLogOut = (payload) => {
    return { type: LOG_OUT, payload };
};

export const actionSignUp = (payload) => {
    return { type: SIGN_UP, payload };
};