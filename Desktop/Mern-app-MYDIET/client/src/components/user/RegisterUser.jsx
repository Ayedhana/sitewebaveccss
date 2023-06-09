import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import("./auth.css");

export default function RegisterUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/user/register", {
        fullname,
        email,
        password,
      })

      .then((res) => {
        console.log(res);
        if (!res.data.status) {
          alert("User already exists");
        }

        alert("Registration completed!, Please verify your email!");
        navigate("/user/login");
        window.localStorage.setItem("email", email);
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          alert("Username or password invalide");
        }
      });
  };
  return (
    <div className="main">
      <div className="sub-main">
        <i class="fa-solid fa-user"></i>
        <form onSubmit={onSubmit}>
          <h2 className="title">Register</h2>
          <div>
            <i class="fa-solid fa-user-pen"></i>
            <input
              type="text"
              placeholder="fullname"
              id="fullname"
              value={fullname}
              onChange={(event) => {
                setFullname(event.target.value);
              }}
            />
          </div>
          <div>
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
          <div>
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
          <button type="submit" className="btn">
            Register
          </button>
          <Link to="/user/login" className="navlink">
            Login
          </Link>
          <div className="register">
            <Link to="/user/login" id="link">
              Login here
            </Link>
            <RiLockPasswordLine size={30} color="rgb(156, 13, 156)" />
          </div>
        </form>
      </div>
    </div>
  );
}
