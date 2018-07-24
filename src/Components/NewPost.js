import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NewPost.css";

const NewPost = (props) => {
    
    const {
        index,
        title,
        category,
        headline,
        subtitle,
        punchline,
        textBeginning,
        textEnd,
        image,
        alt,
        handleSave,
        handleResetPost,
        handleChange
    } = props;

    return (
        <form>
            <h2>Write Your Post</h2>
            <div className="inputDiv">
                <input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={title} />
                <input 
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                    value={category} />
                <input
                    name="headline"
                    placeholder="Headline"
                    onChange={handleChange}
                    value={headline} />
                <input
                    name="subtitle"
                    placeholder="Subtitle"
                    onChange={handleChange}
                    value={subtitle} />
            </div>
            <textarea 
                name="textBeginning" 
                rows="10"
                placeholder="Top half of your post"
                onChange={handleChange}
                value={textBeginning} ></textarea>
            <input
                    name="punchline"
                    placeholder="Quote"
                    onChange={handleChange}
                    value={punchline} />
            <textarea 
                name="textEnd" 
                rows="10"
                placeholder="Bottom half of your post"
                onChange={handleChange}
                value={textEnd} ></textarea>

            <div className="buttonsDiv">
                {(title.trim() === "" || category.trim() === "" || textBeginning.trim() === "" || textEnd.trim() === "")
                ? <button 
                type="button" 
                onClick={() => window.alert("Please fill all the fields.")}>Save</button>
                : <button 
                type="button" 
                onClick={() => handleSave(index)}>Save</button>}

            <button type="button" onClick={handleResetPost}><Link exact to="/blog-live/">Cancel</Link></button>
            </div>
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