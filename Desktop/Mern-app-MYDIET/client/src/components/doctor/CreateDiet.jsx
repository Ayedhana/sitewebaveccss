import React from "react";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { RiStethoscopeLine } from "react-icons/ri";
import("./CreateDiet.css");

function CreateDiet() {
  const doctorID = localStorage.getItem("doctorID");
  const [cookies, _] = useCookies(["access_token"]);
  const [diet, setDiet] = useState({
    name: "",
    breakfast: [],
    lunch: [],
    dinner: [],
    DailyTotalsCaloris: [],
    doctorOwner: doctorID,
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDiet({ ...diet, [name]: value });
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/doctor/createDiet", diet, {
        headers: { Authorization: cookies.access_token },
      });
      console.log(response);
      alert("Diet has been created successfully");
      navigate("/doctor/diets");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="main">
      <div>
        <form onSubmit={onHandleSubmit} className="form">
          <div className="create">
            <h2 className="title">Create a diet</h2>
            <i className="doctor">
              <RiStethoscopeLine />
            </i>
          </div>

          <div>
            <label className="label" htmlFor="name">
              {" "}
              Name
            </label>
            <input
              className="inp"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="breakfast">
              Breakfast{" "}
            </label>
            <input
              type="text"
              id="breakfast"
              name="breakfast"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="lunch">
              Lunch
            </label>
            <input
              type="text"
              id="lunch"
              name="lunch"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="dinner">
              {" "}
              Dinner
            </label>
            <input
              className="inp"
              type="text"
              id="dinner"
              name="dinner"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="DailyTotalsCaloris">
              {" "}
              Daily Totals Caloris
            </label>
            <input
              className="inp"
              type="text"
              id="DailyTotalsCaloris"
              name="DailyTotalsCaloris"
              onChange={handleChange}
            />
          </div>

          <div style={{ paddingTop: 20 }}>
            <label className="label" htmlFor="imageUrl">
              Photo
            </label>
            <input
              className="inp"
              type="text"
              id="imageUrl"
              name="imageUrl"
              onChange={handleChange}
            />
          </div>
          <di style={{ paddingTop: 20 }}>
            <button className="btn" type="submit">
              Save
            </button>
          </di>
        </form>
      </div>
    </div>
  );
}

export default CreateDiet;
