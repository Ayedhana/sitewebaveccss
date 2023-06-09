import React from "react";
import { Navigate } from "react-router-dom";

function DoctorRoutes({ children }) {
  const token = localStorage.getItem("token");
  const doctorID = localStorage.getItem("doctorID");
  const isBanned = localStorage.getItem("isBanned");
  const isDoctor = localStorage.getItem("isDoctor");
  const isVerified = localStorage.getItem("isVerified");
  const isAdmin = localStorage.getItem("isAdmin");

  if (
    doctorID &&
    token &&
    isBanned === "false" &&
    isDoctor === "true" &&
    isAdmin === "false" &&
    isVerified === "true"
  ) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default DoctorRoutes;
