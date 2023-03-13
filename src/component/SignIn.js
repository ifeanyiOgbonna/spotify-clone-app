import React from "react";
import "../styles/SignIn.css";


export default function SignInComponent({ onClick }) {
  return (
    <div className="signContainer">
      <div className="signInfo">
        <button className="signBtn" onClick={onClick}>
          Sign in with spotify
        </button>
      </div>
    </div>
  );
}
