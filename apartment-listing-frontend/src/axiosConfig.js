import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.68.54:5011",
});

export default axiosInstance;


