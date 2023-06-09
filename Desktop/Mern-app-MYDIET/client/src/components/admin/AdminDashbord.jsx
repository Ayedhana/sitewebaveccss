import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import("./Admin.css");

function AdminDashbord() {
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

  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    axios
      .get("/api/admin/users")
      .then((res) => {
        setUsers(res.data.data);
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
            Banning User
          </Link>
        </div>
        <div className="bar">
          <Link to="/admin/bannerDoctor" className="navlink">
            Banning Doctor
          </Link>
        </div>
      </div>

      <div className="container">
        <div>
          <div>
            <h2>List of Doctors</h2>
          </div>
          {doctors.map((doctor) => (
            <div key={doctor._id}>
              <ul className="list">
                <li className="elementList">{doctor.fullname}</li>
                <li className="elementList">{doctor.email}</li>
                <li>
                  <button className="btnBan">
                    Banning
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h2>List of Users</h2>
          </div>
          {users.map((user) => (
            <div key={user._id}>
              <ul className="list">
                <li className="elementList">{user.fullname}</li>
                <li className="elementList">{user.email}</li>
                <li>
                  <button className="btnBan">
                    Banning
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashbord;
