import axios from "axios";
import { useSelector } from "react-redux";


const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});


api.interceptors.request.use(
  (config) => {

  const user = JSON.parse(localStorage.getItem('userInfo')) 
  const token = user?.data?.data?.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;