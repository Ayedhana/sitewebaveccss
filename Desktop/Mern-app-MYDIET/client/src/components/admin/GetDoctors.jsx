import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import("./Admin.css");

function GetDoctors() {
  const [doctors, setDoctors] = useState([]);
  console.log(doctors);
  useEffect(() => {
    axios
      .get("/api/admin/doctors")
      .then((res) => {
        setDoctors(res.data.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  return (
    <div className="dashbord">
      <div className="menu">
        <div className="bar">
          <Link to="/admin/bannerUser" className="navlink">
            Banner User
          </Link>
        </div>
        <div className="bar">
          <Link to="/admin/bannerDoctor" className="navlink">
            Banner Doctor
          </Link>
        </div>
      </div>
      <div className="container">
        <div>
          <h1>List of Doctors</h1>
          {doctors.map((doctor) => (
            <div key={doctor._id}>
              <ul className="list">
                <li className="elementList">{doctor.fullname}</li>
                <li className="elementList">{doctor.email}</li>
                <li>
                  <button className="btnBan">Banning</button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetDoctors;
