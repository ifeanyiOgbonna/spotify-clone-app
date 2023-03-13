const authEndPoint ="http://accounts.spotify.com/authorized?";
const ClientID = " 4b33ecd419c14277bc56769c50adbe78";
const clientSecret = "84be5b161df8458c8c1961b6e30e8610"
const redirectUri = "http://Localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${authEndPoint} client_id=${ClientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}}&respond_type=token&show_dialog=true`;