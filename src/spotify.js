import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "55cf1516b1614a70adc597166d7a4b21";
const redirectUri = "http://localhost:3000/";
const scopes = ["user-library-read","playlist-read-private","user-read-recently-played","user-read-private",
            "user-top-read","user-read-playback-position","user-read-playback-state","user-modify-playback-state",
            "user-follow-modify","playlist-read-collaborative","user-follow-read","user-read-currently-playing",
            "user-library-modify","playlist-modify-private","playlist-modify-public","user-read-email"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20")}&response_type=token&show_dialog=true`;

const appClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    appClient.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer " + token;
        return config;
    })
}

export default appClient;