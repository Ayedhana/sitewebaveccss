import React from "react";
import { Navigate } from "react-router-dom";

function AdminRoutes({ children }) {
  const token = localStorage.getItem("token");
  const isBanned = localStorage.getItem("isBanned");
  const isAdmin = localStorage.getItem("isAdmin");

  if (token && isAdmin === "true") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default AdminRoutes;
