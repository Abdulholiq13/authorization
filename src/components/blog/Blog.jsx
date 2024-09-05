import { useFetch } from "@/hooks/useFetch";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { data, loading } = useFetch("/blogs", { limit: 10 });

  const blogPost = data?.payload.map((item) => (
    <BlogCard key={item._id} title={item.title} desc={item.desc} author={item.userId.fname} />
  ));

  return (
    <div className="container overflow-y-hidden">
      <div className="py-5">
        <div className="grid grid-cols-2">
          <div className="overflow-y-scroll">{blogPost}</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
