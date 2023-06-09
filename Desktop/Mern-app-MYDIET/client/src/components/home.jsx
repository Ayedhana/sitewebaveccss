import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { BsSunriseFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import("./home.css");

function Home() {
  const [diets, setDiets] = useState([]);
  //console.log(diets)
  const navigate = useNavigate();
  const [dietSearch, setDietSearch] = useState("");

  useEffect(() => {
    axios
      .get("/api/public/diets")
      .then((res) => {
        setDiets(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  const Register = () => {
    alert(" You are not member! You should login");
    navigate("/");
  };

  const handleDietSearch = (e) => {
    setDietSearch(e.target.value);
  };

  return (
    <div>
      <div className="intro">
        <div class="SearchBox">
          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
              type="text"
              placeholder="Search by name of diet.."
              onChange={(e) => {
                handleDietSearch(e);
              }}
            ></input>
          </div>
          <div className="aboutContainer">
            <h3 className="us">About Us :</h3>
            <p className="ab">
              MYDIET is a platform for sharing meals ideas for a specific diet
            </p>
            <p className="ab">
              Nutritionists can help people create eating plans that are
              realistic, sustainable, and healthy. Instead of recommending crash
              diets, nutritionists teach people new
              ways to eat and understand food.
            </p>
          </div>
        </div>
      </div>
      <div className="cardDiet">
        {diets
          .filter((diet) =>
            dietSearch
              ? diet.name.toLowerCase().includes(dietSearch.toLowerCase())
              : diets
          )
          .map((diet) => (
            <div className="card" key={diet._id}>
              <img src={diet.imageUrl} />
              <div className="card-body">
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
                <button className="link" onClick={Register}>
                  Save
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
