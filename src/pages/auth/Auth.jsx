import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  let user = null;
  return user ? <Outlet /> : <Navigate replace to="/login" />;
};

export default Auth;
