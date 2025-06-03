import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (data) => {
  try {
    const response = await api.post("/register/", data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};
export const loginUser = async (data) => {
  try {
    const response = await api.post("/login/", data);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};

export default api;








