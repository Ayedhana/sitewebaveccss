import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsSunriseFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";
import { useCookies } from "react-cookie";
import "../home.css";

export const UserDiets = () => {
  const [diets, setDiets] = useState([]);
  const [savedDiets, setSavedDiets] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);

  const userID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDiet = async () => {
      try {
        axios.get("/api/user/diets").then((res) => {
          setDiets(res.data);
        });
      } catch (err) {
        console.error(err);
      }
    };
    const fetchSavedDietUser = async () => {
      try {
        const response = await axios.get(
          `/api/user/diets/savedDiets/ids/${userID}`
        );
        setSavedDiets(response.data.savedDiets);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDiet();
    if (token) fetchSavedDietUser();
  }, []);

  const saveDiet = async (dietID) => {
    try {
      const response = await axios.put(
        "/api/user/diets",
        {
          dietID,
          userID,
        },
        { headers: { Authorization: cookies.access_token } }
      );
      setSavedDiets(response.data.savedDiets);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  const isDietSaved = (id) => savedDiets.includes(id);

  return (
    <div className="cardDiet">
      {diets.map((diet) => (
        <div class="card" key={diet._id}>
          <img src={diet.imageUrl} />
          <div class="card-body">
            <h3 className="about">{diet.name}</h3>
            <ul>
              <li>
                <li>
                  <span id="time">
                    <BsSunriseFill />
                  </span>
                  <span>Breakfast:</span>
                  {diet.breakfast}
                </li>
              </li>
              <li>
                <span id="time">
                  <BsFillSunFill />
                </span>
                <span>Lunch:</span>
                {diet.lunch}
              </li>
              <li>
                <span id="time">
                  <BsFillSunsetFill />
                </span>

                <span>Dinner:</span>
                {diet.dinner}
              </li>
            </ul>
            <p className="calories">
              <span>Daily Totals Caloris:</span>
              {diet.DailyTotalsCaloris}
              <span>(Calories)</span>
            </p>
            <button
              className="link"
              disabled={isDietSaved(diet._id)}
              onClick={() => {
                saveDiet(diet._id);
              }}
            >
              {isDietSaved(diet._id) ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
