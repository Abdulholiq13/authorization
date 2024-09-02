import BlogCard from "./BlogCard";
import { useSelector } from "react-redux";

const Blog = () => {
  const blog = useSelector((state) => state.blog);
  console.log(blog);
  return (
    <div>
      <BlogCard title={blog/} />
    </div>
  );
};

export default Blog;
