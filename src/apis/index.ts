import { BASE_URL } from "./endpoints";
import axios from "axios";

export const getWeatherData = () => {
  return axios.get(BASE_URL);
};
