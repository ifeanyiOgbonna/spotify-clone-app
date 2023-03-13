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
              <li>
                ️
                <a href="#">
                  <i className="emoji">❄️ </i>
                  Chill Hits
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="emoji"> ⭐️ </i>
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
                <a href="#">
                  <i className="emoji">🎵 </i>Indie Pop
                </a>
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
                  <p className="actor-name">
                    <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDY3rSxILy82YPTiTcrMyclMVUjNzMkszgAAjvcJ3w&q=billie+eilish&oq=bill&aqs=chrome.2.69i57j0i433i512j46i433i512j0i433i512j46i433i512j0i512j0i131i433j46i131i433i512j0i433i512j46i433i512.6096j0j15&sourceid=chrome&ie=UTF-8#wptab=si:AEcPFx42LNm5dK4e_8UY072haRqNAdL6HjcV5dToTAo8nT5DnE0YWr8byRHVDNC2ir2geymbpw0f2lyR6rkA4lGRDU2jJ7zx6wb7oPQTIN-SSnshrUFpPpFkKeqgvln4hnNjga8sSYeL">
                      Bille Elish
                    </a>
                  </p>
                  <p className="des">15 songs in library</p>
                </div>
                <BsThreeDots />
              </div>

              <div className="header-items">
                <img src={Rake} alt="artist" className="actor-Img" />
                <div className="actor-description">
                  <p className="actor-name">
                    <a href="https://www.google.com/search?q=drake+songs+list&cs=1&biw=1440&bih=821&sxsrf=AJOqlzWRfgWxtwJNJpBiDGMPe9ZZjLfosg%3A1678729781838&ei=NWIPZJSnMsCFxc8P3aKywAE&oq=drake+songs&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgCMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgcIABCwAxBDMgoILhDUAhCwAxBDMgcILhCwAxBDMgoILhDUAhCwAxBDMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMgwILhDIAxCwAxBDGAIyDAguEMgDELADEEMYAjIMCC4QyAMQsAMQQxgCMgwILhDIAxCwAxBDGAJKBAhBGABQAFgAYPMMaAFwAXgAgAEAiAEAkgEAmAEAyAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp">Drake</a>
                    
                  </p>
                  <p className="des">50 songs in library</p>
                </div>
                <BsThreeDots />
              </div>

              <div className="header-items">
                <img src={Kanye} alt="artist" className="actor-Img" />
                <div className="actor-description">
                  <p className="actor-name"><a href="https://www.google.com/search?q=kanye+west+song+list&cs=1&biw=1440&bih=769&sxsrf=AJOqlzXVW_72-f2P1HgLL-C9_BFFsFDWQA%3A1678729789216&ei=PWIPZOrXDI-Qxc8P3OasiAM&ved=0ahUKEwiq6onmu9n9AhUPSPEDHVwzCzEQ4dUDCA8&uact=5&oq=kanye+west+song+list&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEBYQHhAKMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEAoyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxDqAhAnOgwILhDqAhC0AhBDGAE6DAgAEOoCELQCEEMYAToPCC4Q1AIQ6gIQtAIQQxgBOgQIIxAnOgQIABBDOggILhCABBCxAzoFCC4QgAQ6CAguELEDEIMBOgUILhCRAjoHCC4QsQMQQzoECC4QQzoHCC4Q1AIQQzoICC4Q1AIQkQI6BQgAEJECOgoIABCABBAUEIcCOggILhCABBDUAjoLCAAQFhAeEPEEEApKBAhBGABQ3AZYkUBg00JoAnABeAOAAb0HiAHxO5IBDDItMTAuMy41LjAuMpgBAKABAbABFMABAdoBBggBEAEYAQ&sclient=gws-wiz-serp">Kanye West</a> </p>
                  <p className="des">124 songs in library</p>
                </div>
                <BsThreeDots />
              </div>

              <div className="header-items">
                <img src={Tylor} alt="artist" className="actor-Img" />
                <div className="actor-description">
                  <p className="actor-name"><a href="https://www.google.com/search?q=tylor+swift+song+list&cs=1&biw=1440&bih=821&sxsrf=AJOqlzX2s3ZSrTh8XJ5L-3_ovKzl9pedlQ%3A1678729849530&ei=eWIPZOf5H42Vxc8PxOYj&ved=0ahUKEwinmuuCvNn9AhWNSvEDHUTzCAAQ4dUDCA8&uact=5&oq=tylor+swift+song+list&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECAAQQzIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjoHCCMQ6gIQJzoMCAAQ6gIQtAIQQxgBOg0ILhCPARDqAhC0AhgCOg0IABCPARDqAhC0AhgCOgQIIxAnOgQILhBDOgUIABCRAjoFCC4QkQI6CwgAEIAEELEDEIMBOggILhCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BwguELEDEEM6CAgAELEDEJECOggILhDUAhCRAjoNCC4QDRCABBCxAxCxAzoKCAAQDRCABBCxAzoKCC4QDRCxAxCABDoHCAAQDRCABDoHCC4QDRCABDoHCAAQsQMQQzoLCAAQHhANEPEEEAo6BggAEB4QDToGCAAQFhAeOgcILhCABBAKSgQIQRgAUIgDWJFWYIxjaAZwAXgBgAHEBYgB1EOSAQwyLTEyLjkuNC4wLjGYAQCgAQGwARTAAQHaAQYIARABGAHaAQYIAhABGAo&sclient=gws-wiz-serp">Tylor Swift</a> </p>
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
                  <MdOutlineAddBox className="port" />
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
