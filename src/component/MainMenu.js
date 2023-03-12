import React from "react";
import "../styles/MainMenu.css";
import Artist from "../images/bille.jpeg";
import Rake from "../images/drake1.jpeg";
import Kanye from "../images/kanye.jpeg";
import Tylor from "../images/tylor.jpeg";
import Cute from "../images/cute.jpeg";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";

function MainMenu() {
  return (
    <div className="mainMenu">
      <div className="main-container">
        <h2 className="main-header">Shortcuts</h2>
        <div className="main-testimonial">
          <div className="main-context">
            <ul className="container-emoji">
              <li>️
                <a href="#">
                  <i className="emoji">❄️ </i>
                  Chill Hits
                </a>

              </li>

              <li>
                <a href="#" >
                  <i className="emoji"> ⭐️   </i>
                  Hop
                </a>

              </li>

              <li>
                <a href="#">
                  <i className="emoji">🎸 </i>
                  Accoustic
                </a>

              </li>

              <li>
                <a href="#"><i className="emoji">🎵   </i>Indie Pop</a>
              </li>

              <li>
                <a href="#">
                  <i className="emoji">🎹 </i>
                  Piano Blues
                </a>

              </li>

              <li>
                <a href="#">
                  <i className="emoji">🎺 </i>
                  Jazz
                </a>
              </li>
            </ul>
          </div>

          <section className="section-actors">
            <div className="container-actors">
              <h2 className="actor-header">Fav Artist</h2>
              <div className="header-items">
                <img src={Artist} alt="artist" className="actor-Img" />
                <div className="actor-description">
                  <p className="actor-name">Bille Elish</p>
                  <p className="des">15 songs in library</p>
                </div>
                <BsThreeDots />
              </div>

              <div className="header-items">
                <img src={Rake} alt="artist" className="actor-Img" />
                <div className="actor-description">
                  <p className="actor-name">Drake</p>
                  <p className="des">50 songs in library</p>
                </div>
                <BsThreeDots />
              </div>

              <div className="header-items">
                <img src={Kanye} alt="artist" className="actor-Img" />
                <div className="actor-description">
                  <p className="actor-name">Kanye West</p>
                  <p className="des">124 songs in library</p>
                </div>
                <BsThreeDots />
              </div>

              <div className="header-items">
                <img src={Tylor} alt="artist" className="actor-Img" />
                <div className="actor-description">
                  <p className="actor-name">Tylor Swift</p>
                  <p className="des">196 songs in library</p>
                </div>
                <BsThreeDots />
              </div>
            </div>

            <div className="actor-footer">
              <div className="portfolio-box">
                <img src={Cute} alt="image" className="img-box" />
                <div className="try">
                  <div className="portfolio">
                    <p className="portfolio-name">Torisetsu Drawing</p>
                    <p className="portfolio-des">Kana Nishino</p>
                  </div>
                  <MdOutlineAddBox  className="port"/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export { MainMenu };
