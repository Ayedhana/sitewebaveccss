import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsSunriseFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";

import "../home.css";

export const UserSavedDiets = () => {
  const [savedDiets, setSavedDiets] = useState([]);
  console.log(savedDiets);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    const fetchSavedDiet = async () => {
      try {
        const response = await axios.get(
          `/api/user/diets/savedDiets/${userID}`
        );
        setSavedDiets(response.data.savedDiets);
        console.log(response.data.savedDiets);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSavedDiet();
  }, []);

  return (
    <div className="cardDiet">
      {savedDiets.map((diet) => (
        <div class="card" key={diet._id}>
          <img src={diet.imageUrl} />
          <div class="card-body">
            <h3 className="about">{diet.name}</h3>
            <ul>
              <li>
                <span id="time">
                  <BsSunriseFill />
                </span>
                <span>Breakfast:</span>
                {diet.breakfast}
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
          </div>
        </div>
      ))}
    </div>
  );
};
