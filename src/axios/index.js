import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://motion.propulsion-home.ch/backend/api",
});

axiosInstance.defaults.baseURL =
  "https://motion.propulsion-home.ch/backend/api";
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

export default axiosInstance;
