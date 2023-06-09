import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import UserNavbar from "../navbar/UserNavbar";
import Footer from "./footer/Footer";

export default function UserLayout() {
  return (
    <div className="content">
      <UserNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
