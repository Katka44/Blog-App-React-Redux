import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Favorites = props => {
  const { users, loggedIn } = props;

  const makeFavorites = (array, loggedIn) => {
    const favorites = [];

    array.map(object => {
      if (object.username === loggedIn) {
        object.favorites.map(favPerson => {
          favorites.push(favPerson);
        });
      }
    });
    favorites.sort();
    return favorites.map((name, index) => {
      return (
        <Link key={index} exact to={`/Blog-App-React-Redux/users/${name}`}>
          <p key={index} title={`See ${name}'s profile`} className="indented">
            {name}
          </p>
        </Link>
      );
    });
  };

  return <div className="">{makeFavorites(users, loggedIn)}</div>;
};

Favorites.propTypes = {
  users: PropTypes.array,
  loggedIn: PropTypes.string
};

export default Favorites;
