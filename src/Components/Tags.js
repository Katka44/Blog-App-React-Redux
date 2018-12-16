import React from "react";
import PropTypes from "prop-types";
import "./Tags.css";

const Tags = props => {
  const { handleFilter, posts } = props;

  const makeSeeAll = () => {
    return (
      <p
        key="seeAll"
        className="tag"
        onClick={() => handleFilter("none")}
        title={`See all posts`}
      >
        ALL
      </p>
    );
  };

  const makeTags = array => {
    const categories = [];
    array.map(object => {
      if (!categories.includes(object.category)) {
        categories.push(object.category);
      }
    });
    categories.sort();

    const tags = categories.map((item, index) => {
      return (
        <p
          key={index}
          className="tag"
          onClick={() => handleFilter(item)}
          title={`See ${item.toLowerCase()} posts`}
        >
          {item}
        </p>
      );
    });

    return categories.length > 1 ? tags.concat(makeSeeAll()) : tags;
  };

  return <div className="tagDiv">{makeTags(posts)}</div>;
};

Tags.propTypes = {
  posts: PropTypes.array,
  handleFilter: PropTypes.func
};

export default Tags;
