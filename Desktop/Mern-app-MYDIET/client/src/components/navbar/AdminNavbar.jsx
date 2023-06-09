import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import("./Navbar.css");

function AdminNavbar() {
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
            <img classname="logo" src="logo.png" alt="logo" />
          </Link>
        </div>
      </div>
      <div>
        <Link to="admin/users" className="navlink">
          Show User
        </Link>
      </div>
      <div>
        <Link to="admin/doctors" className="navlink">
          Show Doctor
        </Link>
      </div>
      <div>
        <li>
          <Link to="/doctor/login" className="navlink" onClick={Logout}>
            Logout
          </Link>
        </li>
      </div>
    </div>
  );
}

export default AdminNavbar;
