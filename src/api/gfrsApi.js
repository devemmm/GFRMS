import axios from "axios";
// export const gfrsApi = "https://5377-154-72-121-81.eu.ngrok.io";
export const gfrsApi = "https://gfrms-api.herokuapp.com";

export default axios.create({
  // baseURL: "https://5377-154-72-121-81.eu.ngrok.io",
  baseURL: "https://gfrms-api.herokuapp.com",
});
