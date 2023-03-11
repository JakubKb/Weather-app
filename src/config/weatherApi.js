import axios from "axios";
import apiConfig from "./apiConfig";

const { API_KEY } = apiConfig;
const baseUrl = "https://api.openweathermap.org/data/2.5/";

export default {
  getWeather(city) {
    const url = `${baseUrl}weather?q=${city}&appid=${API_KEY}`;
    return axios.get(url);
  },
};
