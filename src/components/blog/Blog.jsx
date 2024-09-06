import { useFetch } from "@/hooks/useFetch";
import axios from "@/api";
import BlogCard from "./BlogCard";
import { memo, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { IoIosAdd } from "react-icons/io";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SkeletonCard from "../skeleton/SkeletonCard";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const [reload, setReload] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useFetch(`/blogs`, { limit: 20 }, [reload, currentPage]);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const handleCreate = () => {
    console.log("Create blog post");
  };

  const handleDelete = (id) => {
    axios.delete(`/blogs/${id}`);
    setReload((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get("/admin/profile")
      .then((res) => {
        dispatch({ type: "SET_PROFILE", payload: res.data.payload });
      })
      .catch((res) => console.log(res));
  }, [dispatch]);

  const blogPost = data?.payload?.map((item) => (
    <BlogCard
      key={item._id}
      id={item._id}
      title={item.title}
      desc={item.desc}
      author={item.userId.fname}
      delete={profile?._id === item.userId._id ? handleDelete : null}
    />
  ));

  console.log(data);

  return (
    <div className="container overflow-y-hidden">
      <div className="py-5 flex items-center justify-center w-full">
        {loading ? <SkeletonCard /> : <div className="flex w-full items-center justify-start flex-wrap gap-4">{blogPost}</div>}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Button className="fixed bottom-6 right-6 rounded-full p-[10px]" onClick={handleCreate}>
        <IoIosAdd className="text-lg" />
      </Button>
    </div>
  );
};

export default memo(Blog);
