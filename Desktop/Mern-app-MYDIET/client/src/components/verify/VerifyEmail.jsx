import React, { useEffect, useState } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import("./VerifyEmail.css");

function VerifyEmail() {
  const [verify, setVerify] = useState();
  const email = localStorage.getItem("email");
  useEffect(() => {
    axios
      .put(`api/user/verifyEmail?email=${email}`)
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          setVerify(true);
        }
      })
      .catch((err) => {
        if (!err.response.data.status) {
          setVerify(false);
        }
      });
  }, []);

  return (
    <div>
      {verify ? (
        <div className="verif">
          <MdVerifiedUser size={80} />
          <h2>Your account is new verified</h2>{" "}
          <button className="btnVerif">
            <Link to="/user/login" style={{ all: "unset" }}>
              Login
            </Link>
          </button>
        </div>
      ) : (
        <div className="noverif">
          <IoMdClose size={80} />
          <h2>Sorry!!!Your account is Not verified</h2>{" "}
          <button className="btnVerif">
            <Link to="/user/Register" style={{ all: "unset" }}>
              Register{" "}
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
