import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import AdminNavbar from "../navbar/AdminNavbar";
import Footer from "./footer/Footer";

export default function AdminLayout() {
  return (
    <div className="content">
      <AdminNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
