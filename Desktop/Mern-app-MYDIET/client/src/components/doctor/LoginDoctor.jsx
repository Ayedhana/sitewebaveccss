import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import("../user/auth.css");

export default function LoginDoctor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/doctor/login", {
        email,
        password,
      });
      console.log(response);
      if (response) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("doctorID", response.data.doctorID);
        window.localStorage.setItem("isBanned", response.data.isBanned);
        window.localStorage.setItem("isDoctor", response.data.isDoctor);
        window.localStorage.setItem("isAdmin", response.data.isAdmin);
        window.localStorage.setItem("isVerified", response.data.isVerified);
        navigate("/doctor/diets");
      }
    } catch (err) {
      console.error(err);
      alert("Username or password invalide");
    }
  };

  return (
    <div className="main">
      <div className="sub-main">
        <i class="fa-solid fa-user"></i>
        <form onSubmit={onSubmit}>
          <h2 className="title">Login</h2>
          <div className="email">
            <i class="fa-solid fa-square-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="pass">
            <i class="fa-sharp fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="footerform">
            <button className="btn">Login</button>
            <div className="register">
              <Link to="/doctor/register" id="link">
                Register here
              </Link>
              <GiArchiveRegister size={30} color="rgb(156, 13, 156)" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
