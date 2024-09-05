import Blog from "@/components/blog/Blog";
import { memo } from "react";

const Home = () => {
  return (
    <>
      <Blog />
    </>
  );
};

export default memo(Home);
