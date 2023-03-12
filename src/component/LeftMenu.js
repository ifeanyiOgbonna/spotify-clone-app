import React from "react";
import "../styles/LeftMenu.css";
import Artist from "../images/bille.jpeg";
import Logo from "../images/logo.png";


function LeftMenu() {
  return (
    <div className="left-Menu">
      <div className="menu">
        <icon className="sign" class="material-symbols-outlined">
          menu_open
        </icon>


      </div>

      <div className="nav-bar">
        <div className="nav-box">

          <div className="header">
            <img src={Logo} alt="logo" className="logo" />
            <span className="head">Bee</span>Music
          </div>
          <ul>
            <li>
              <a href="#Home" className="active">
                <small class="material-symbols-outlined">home</small>Home
              </a>
            </li>

            <li>
              <a href="#Trends">
                <small class="material-symbols-outlined">chart_data</small>
                Trends
              </a>
            </li>

            <li>
              <a href="#Feed">
                <small class="material-symbols-outlined">charger</small>Feed
              </a>
            </li>

            <h4 className="description">Discover</h4>

            <li>
              <a href="#New and Notable">
                <small class="material-symbols-outlined">view_comfy_alt</small>
                New and Notable
              </a>
            </li>

            <li>
              <a href="#Release Calender">
                {" "}
                <small class="material-symbols-outlined">calendar_month</small>
                Release Calendar
              </a>
            </li>

            <li>
              <a href="#Event">
                {" "}
                <small class="material-symbols-outlined">
                  confirmation_number
                </small>
                Events
              </a>
            </li>

            <h4 className="description">Your Collection</h4>

            <li>
              <a href="#Favorite Song">
                <small class="material-symbols-outlined">
                  favorite
                </small>

                Favorite Songs
              </a>
            </li>

            <li>
              <a href="#Artist">
                <small class="material-symbols-outlined">groups</small>Artist
              </a>
            </li>

            <li>
              <a href="#Album">
                <small class="material-symbols-outlined">star</small>Albums
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="footer">
          <div className="footer-box">
            <img src={Artist} alt="artist" className="bannerImg" />
            <p>Bille Elish</p>
            <small class="material-symbols-outlined">keyboard_arrow_right</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LeftMenu };
