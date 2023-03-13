import React from "react";
import "../styles/LeftMenu.css";
import Artist from "../images/bille.jpeg";
import Logo from "../images/logo.png";


function LeftMenu() {
  return (
    <div className="left-Menu">
      <div className="menu">
        <icon  className="material-symbols-outlined sign">
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
                <small className="material-symbols-outlined">home</small>Home
              </a>
            </li>

            <li>
              <a href="#Trends">
                <small className="material-symbols-outlined">chart_data</small>
                Trends
              </a>
            </li>

            <li>
              <a href="#Feed">
                <small className="material-symbols-outlined">charger</small>Feed
              </a>
            </li>

            <h4 className="description">Discover</h4>

            <li>
              <a href="#New and Notable">
                <small className="material-symbols-outlined">view_comfy_alt</small>
                New and Notable
              </a>
            </li>

            <li>
              <a href="#Release Calender">
                {" "}
                <small className="material-symbols-outlined">calendar_month</small>
                Release Calendar
              </a>
            </li>

            <li>
              <a href="#Event">
                {" "}
                <small className="material-symbols-outlined">
                  confirmation_number
                </small>
                Events
              </a>
            </li>

            <h4 className="description">Your Collection</h4>

            <li>
              <a href="#Favorite Song">
                <small className="material-symbols-outlined">
                  favorite
                </small>

                Favorite Songs
              </a>
            </li>

            <li>
              <a href="#Artist">
                <small className="material-symbols-outlined">groups</small>Artist
              </a>
            </li>

            <li>
              <a href="#Album">
                <small className="material-symbols-outlined">star</small>Albums
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="footer">
          <div className="footer-box">
            <img src={Artist} alt="artist" className="bannerImg" />
            <p className="actor-name"><a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDY3rSxILy82YPTiTcrMyclMVUjNzMkszgAAjvcJ3w&q=billie+eilish&oq=bill&aqs=chrome.2.69i57j0i433i512j46i433i512j0i433i512j46i433i512j0i512j0i131i433j46i131i433i512j0i433i512j46i433i512.6096j0j15&sourceid=chrome&ie=UTF-8#wptab=si:AEcPFx42LNm5dK4e_8UY072haRqNAdL6HjcV5dToTAo8nT5DnE0YWr8byRHVDNC2ir2geymbpw0f2lyR6rkA4lGRDU2jJ7zx6wb7oPQTIN-SSnshrUFpPpFkKeqgvln4hnNjga8sSYeL">Bille Elish</a> </p>
            <small className="material-symbols-outlined">keyboard_arrow_right</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LeftMenu };
