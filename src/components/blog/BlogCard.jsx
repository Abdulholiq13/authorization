import React from "react";

const BlogCard = ({ title, desc, author }) => {
  return (
    <div className="container">
      <h3 className="text-2xl">Hech</h3>
      <p>{desc}</p>
      <p>{author}</p>
    </div>
  );
};

export default BlogCard;
