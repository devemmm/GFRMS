import axios from "axios";
// export const gfrsApi = "https://gfrs.nextreflexe.com"
export const gfrsApi = "https://gfrms-api.herokuapp.com";

export default axios.create({
  // baseURL: "https://gfrs.nextreflexe.com",
  baseURL: "https://gfrms-api.herokuapp.com",
});
