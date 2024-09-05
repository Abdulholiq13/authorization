import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Auth from "./pages/auth/Auth";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default memo(App);
