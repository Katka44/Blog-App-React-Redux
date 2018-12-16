import { users, loggedIn } from "../data.json";
import { LOG_IN, LOG_OUT, SIGN_UP } from "../actions";

const usersReducer = (store = { users, loggedIn }, action) => {
  switch (action.type) {
    case LOG_IN:
      const newUsers = [...store.users];
      const checkLogin = () => {
        return newUsers.map((object, index) => {
          return (
            object.username === action.payload.username &&
            object.password === action.payload.password
          );
        });
      };
      if (checkLogin().includes(true)) {
        return { users: newUsers, loggedIn: action.payload.username };
      } else {
        window.alert("Username and password do not match");
      }
      return store;

    case LOG_OUT:
      const newArray = [...store.users];
      return { users: newArray, loggedIn: "null" };

    case SIGN_UP:
      const newArr = [...store.users].concat(action.payload);
      const result = { users: newArr, loggedIn: "null" };
      return result;

    default:
      return store;
  }
};

export default usersReducer;
