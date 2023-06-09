import React from "react";
import { Navigate } from "react-router-dom";

function UserRoutes({ children }) {
  const token = localStorage.getItem("token");
  const userID = localStorage.getItem("token");
  const isBanned = localStorage.getItem("isBanned");
  const isUser = localStorage.getItem("isDoctor");
  const isVerified = localStorage.getItem("isVerified");

  if (
    token &&
    isBanned === "false" &&
    isUser === "true" &&
    isVerified === "true" &&
    userID
  ) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default UserRoutes;
