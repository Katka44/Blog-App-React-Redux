import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NewPost.css";

const NewPost = (props) => {
    
    const {
        index,
        title,
        category,
        text,
        handleSave,
        handleResetPost,
        handleChange
    } = props;

    return (
        <form>
            <div className="inputDiv">
                <input
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                    value={title} />
                <input 
                    name="category"
                    placeholder="category"
                    onChange={handleChange}
                    value={category} />
            </div>
            <textarea 
                name="text" 
                rows="10"
                onChange={handleChange}
                value={text} ></textarea>
            {(title.trim() === "" || category.trim() === "" || text.trim() === "")
                ? <button 
                type="button" 
                onClick={() => window.alert("Please fill all the fields.")}>Save</button>
                : <button 
                type="button" 
                onClick={() => handleSave(index)}>Save</button>}
            

            <button type="button" onClick={handleResetPost}><Link exact to="/blog-live/">Cancel</Link></button>
            <p></p>
        </form>

    );
}

NewPost.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    text: PropTypes.string,
    handleSave: PropTypes.func,
    handleResetPost: PropTypes.func,
    handleChange: PropTypes.func
};

export default NewPost;