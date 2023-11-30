import axios from "axios";

let apiURL;

if (process.env.REACT_APP_API_ACCESS === "LOCAL") {
  apiURL = "http://127.0.0.1:3001";
} else {
  apiURL = "https://express-js-countries-demo.onrender.com";
}

const api = axios.create({
  baseURL: `${apiURL}/api`,
});

export default api;
