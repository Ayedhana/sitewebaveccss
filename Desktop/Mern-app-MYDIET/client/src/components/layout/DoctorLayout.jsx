import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import DoctorNavbar from "../navbar/DoctorNavbar";
import Footer from "./footer/Footer";
import DoctorRoutes from "../routes/DoctorRoutes";

export default function DoctorLayout() {
  return (
    <div className="content">
      <DoctorNavbar />
      <DoctorRoutes>
        <Outlet />
      </DoctorRoutes>

      <Footer />
    </div>
  );
}
