import React from 'react';

const BlogFeaturedImage = props => {
    if (!props.img)  {    //shorthand for "if props img === null"
        return null;
    }

    return (
        <div className="featured-image-wrapper">
            <img src={props.img} />
        </div>
    );
};

export default BlogFeaturedImage