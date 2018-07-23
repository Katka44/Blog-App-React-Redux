import { posts } from "../data.json";
import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, SORT_POSTS, TOGGLE_LIKE } from "../actions";

const postsReducer = (store = posts, action) => {
    switch (action.type) {
        case ADD_POST:
            return [...store.concat(action.payload)];

        case EDIT_POST:
            const newObject = 
                {
                    title: action.payload.title,
                    category: action.payload.category,
                    headline: action.payload.headline,
                    subtitle: action.payload.subtitle,
                    punchline: action.payload.punchline,
                    textBeginning: action.payload.textBeginning,
                    textEnd: action.payload.textEnd,
                    image: action.payload.image,
                    alt: action.payload.alt,
                    isLiked: action.payload.isLiked,
                    likedBy: action.payload.likedBy,
                    comments: action.payload.comments,
                    author: action.payload.author,
                    writtenDate: action.payload.writtenDate
                };
            const newStore = [...store];
            newStore[action.payload.index] = newObject;
            console.log("likedby", action.payload.likedBy.length);
            return newStore;

        case DELETE_POST:
            const newData = [...store];
            newData.splice(action.payload.index, 1);
            return newData;

        case ADD_COMMENT:
            const newArr = [...store];
            const newComment = {author: action.payload.author, text: action.payload.text}
            newArr[action.payload.index].comments.push(newComment);
            return newArr;

        case TOGGLE_LIKE:
            const newArray = [...store];
            const index = newArray[action.payload.index].likedBy.indexOf(action.payload.name);
            if (index === -1) {
                newArray[action.payload.index].likedBy.push(action.payload.name)
            } else {
                newArray[action.payload.index].likedBy.splice(index, 1)
            }
            return newArray;

        case SORT_POSTS:
            const newSt = [...action.payload];
            return newSt;

        default:
            return store;
    }
};

export default postsReducer;