import React from "react";
import { useEffect } from "react";
import "./Nav.css";
import logoMain from "../assets/logoMain.png";
import notification from "../assets/notification.png";
import ellipse from "../assets/Ellipse_1-2.png";
import search_icon from "../assets/search_icon.png";
import arrows from "../assets/arrows.png";
import axios from "axios";
import dashboard from "../assets/dahboard.png";
import profile from "../assets/profile.png";
import vector from "../assets/Vector.png";
import setting from "../assets/settings.png";
import profile1 from "../assets/profile1.png";

const Nav = () => {
  const fetchData = async () => {
    const accessToken = sessionStorage.getItem("access");
    console.log(accessToken);

    const url = "https://be16-125-18-168-34.ngrok-free.app/api/users/profile";
    const headers = {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1MTE1NTkyLCJpYXQiOjE3MTUxMTQ2OTIsImp0aSI6IjRmMDBmMjJmZjcyNjQ2NDA5MzNiZmM3ZTFjNzdhNTM0IiwidXNlcl9pZCI6NH0.cqPXvdfMqJMOnWzStuUFLtp84z3drD05U_3z5Ay0zHE",
      "ngrok-skip-browser-warning": "true",
    };

    axios
      .get(url, { headers })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div id="viewport">
        <div id="sidebar">
          <header>
            <img src={logoMain} alt="logo" />

          </header>

          <div className="sidebar-content">
            <ul>
              <li className="list-item">
                <a href="">
                  <img src={dashboard} alt="dashboard" />
                  Dashboard
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  <img src={profile} alt="profile" />
                  User Management
                </a>
              </li>
              <li className="list-item">
                <a href="">
                  <img src={vector} alt="audit" />
                  Audit
                </a>
              </li>
            </ul>
            <div className="settings-section">
              <ul>
                <li><a href="">
                <img src={profile1} alt="profile1" />
                Profile
              </a></li>
                <li><a href="">
                <img src={setting} alt="settings" />
                Settings
              </a></li>
              </ul>
              
              
            </div>
          </div>
        </div>

        <div id="content">
          <nav className="navbar ">
            <div className="container-fluid headmain">
              <div className="searchbar">
                <input
                  type="search"
                  placeholder="search"
                  aria-describedby="button-addon4"
                  className="form-control searchInput"
                />
                <i className="searchicon">
                  <img src={search_icon} alt="" />
                </i>
              </div>
              <div className="notification">
                <img src={notification} alt="bell" />
              </div>
              <div className="adminDetails">
                <img src={ellipse} alt="ellipse" />
                <span>Marc Gabriel</span>
                <p>Administrator</p>
                <img className="arrows" src={arrows} alt="arrows" />
              </div>
            </div>
          </nav>
          <div className="container">
            <h1>Simple Sidebar</h1>
            <p>
              Make sure to keep all page content within the
              <code>#content</code>.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
