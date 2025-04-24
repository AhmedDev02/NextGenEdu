import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nextgenedu-database.azurewebsites.net/api",
});

export default axiosInstance;
