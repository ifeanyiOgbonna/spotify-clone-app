import React from "react";
import SignInComponent from "../component/SignIn";

function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
const SignIn = () => {
  const signInWithSpotify = () => {
    const stateKey = "spotify_auth_state";
    const client_id = "4b33ecd419c14277bc56769c50adbe78";
    // const client_secret = "84be5b161df8458c8c1961b6e30e8610";
    const state = generateRandomString(16);
    localStorage.setItem(stateKey, state);
    const redirect_uri = "http://localhost:3000/?";
    const scope = "user-read-private user-read-email";

    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&state=" + encodeURIComponent(state);
    window.location = url;
  };
  return (
    <div>
      <SignInComponent onClick={signInWithSpotify} />
    </div>
  );
};

export default SignIn;
