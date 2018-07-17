import { posts } from "./data.json";

export const reducer = (store = posts, action) => {
    switch (action.type) {
        case "ADD_POST":
            return [...store.concat(action.payload)];

        case "EDIT_POST":
            const newObject = 
                {
                    title: action.payload.title,
                    category: action.payload.category,
                    text: action.payload.text
                };
            const newStore = store;
            newStore[action.payload.index] = newObject;
            return newStore;

        case "DELETE_POST":
            const newData = store;
            newData.splice(action.payload, 1);
            return newData;
        default:
            return store;
    }
};