import { useFetch } from "@/hooks/useFetch";
import axios from "@/api";
import BlogCard from "./BlogCard";
import { memo, useState } from "react";
import { Button } from "../ui/button";
import { IoIosAdd } from "react-icons/io";

const Blog = () => {
  const [reload, setReload] = useState(false);
  const { data, loading, error } = useFetch("/blogs", { limit: 30 }, [reload]);

  const handleCreate = () => {
    console.log("Create blog post");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/blogs/${id}`);
      setReload((prev) => !prev);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  const blogPost = data?.payload.map((item) => (
    <BlogCard key={item._id} id={item._id} title={item.title} desc={item.desc} author={item.userId.fname} delete={handleDelete} />
  ));

  return (
    <div className="container overflow-y-hidden">
      <div className="py-5">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading blogs: {error.message}</p>
        ) : (
          <div className="flex w-full items-center flex-wrap gap-4">{blogPost}</div>
        )}
      </div>

      <Button className="fixed bottom-6 right-6 rounded-full p-[10px]" onClick={handleCreate}>
        <IoIosAdd className="text-lg" />
      </Button>
    </div>
  );
};

export default memo(Blog);
