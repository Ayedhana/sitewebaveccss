import { Link } from "react-router-dom";
import { Component } from "react";
import("./Navbar.css");

class PublicNavbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
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
          <ul
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <Link to="/" className="navlink active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="navlink">
                About
              </Link>
            </li>
            <li>
              <Link to="/user/register" className="navlink">
                Register
              </Link>
            </li>
            <li>
              <Link to="/user/login" className="navlink">
                Login
              </Link>
            </li>
            <li>
              <Link to="/doctor/login" className="navlink">
                Are you Nutritionist?
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PublicNavbar;
