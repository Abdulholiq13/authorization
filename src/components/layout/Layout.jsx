import React, { memo } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default memo(Layout);
