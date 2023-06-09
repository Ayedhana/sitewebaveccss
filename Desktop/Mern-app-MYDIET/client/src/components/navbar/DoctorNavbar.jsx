import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import("./Navbar.css");

function DoctorNavbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const Logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="containerLogo">
        <div>
          <Link to="/">
            <img className="logo" src="logo.png" alt="logo" />
          </Link>
        </div>
      </div>
      <div>
        <ul id="navbar">
          <li>
            <Link to="/" className="navlink active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/doctor/CreateDiet" className="navlink">
              Add diet
            </Link>
          </li>
          <li>
            <Link to="/doctor/diets" className="navlink">
              Diets
            </Link>
          </li>
          <li>
            <Link to="/doctor/diets/savedDiets" className="navlink">
              Saved diets
            </Link>
          </li>
          <li>
            <Link to="/doctor/login" className="navlink" onClick={Logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DoctorNavbar;
