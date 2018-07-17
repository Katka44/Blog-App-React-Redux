import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "./BigPostHeader.css";

const BigPostHeader = (props) => {
    const {
        clearBigPostInputs,
        loggedIn,
        author,
        handleEdit,
        index,
        handleDelete,
        cat
    } = props;

    return (
        <div className="buttonDiv">
            <Button   
                to="/blog-live/"
                type="button"      
                isLink="true"
                text="Back"
                handler={clearBigPostInputs} />

            {loggedIn === author
                ? <Button   
                    to="/blog-live/"
                    type="button"      
                    isLink="false"
                    text="Edit Post"
                    handler={() => handleEdit(index)} />
                : <div></div> 
            }
            {loggedIn === author
                ? <Button   
                    to="/blog-live/"
                    type="button"      
                    isLink="false"
                    text="Delete Post"
                    handler={() => handleDelete(index, cat)} />
                : <div></div> 
            }
        </div>
    );
}

BigPostHeader.propTypes = {
    clearBigPostInputs: PropTypes.func,
    loggedIn: PropTypes.string,
    author: PropTypes.string,
    handleEdit: PropTypes.func,
    index: PropTypes.number,
    handleDelete: PropTypes.func,
    cat: PropTypes.string
};

export default BigPostHeader;