import React from "react";

const BlogCards = ({ blogCard }) => {
  return (
    <>
      <div className="col-4 blog-image my-3">
        <img style={{ width: "100%", height: "100%" }} src={blogCard.image} />
      </div>
      <div className="col-8 blog-text my-3">
        <h1>{blogCard.title}</h1>
        <p>{blogCard.description}</p>
      </div>
    </>
  );
};

export default BlogCards;
