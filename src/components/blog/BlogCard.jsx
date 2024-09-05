import React, { memo } from "react";

const BlogCard = ({ title, desc, author }) => {
  return (
    <div className="p-4 text-left border border-gray-500 rounded-lg min-w-[200px]">
      <h3 className="text-2xl">Hech</h3>
      <p className="text-sm uppercase">{desc}</p>
      <p className="text-xs text-gray-500">{author}</p>
    </div>
  );
};

export default memo(BlogCard);
