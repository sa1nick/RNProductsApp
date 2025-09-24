import axios from "axios";
import { MMKV } from "react-native-mmkv";
import { BASE_URL } from "./endPoints";

// Initialize MMKV storage
export const storage = new MMKV();

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add an interceptor to modify the request headers
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      // Get token directly from MMKV
      const token = storage.getString("AuthAccessToken");
      const userDataString = storage.getString("userData");

      config.headers = config.headers || {};

      // Set the Authorization header if token exists
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Set userId if userData exists
      if (userDataString) {
        try {
          const userData = JSON.parse(userDataString);
          if (userData?.userId) {
            config.headers.userId = userData.userId;
          }
        } catch (parseError) {
          console.error("Error parsing userData:", parseError);
        }
      }

      return config;
    } catch (error) {
      console.error("Interceptor Error:", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
