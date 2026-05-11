import React from "react";
import { getToken } from "../../utils/getUserFromLocalStorage";
import { Navigate } from "react-router-dom";
const AuthRoute = ({ children }) => {
  const isLogin = getToken();
  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthRoute;
