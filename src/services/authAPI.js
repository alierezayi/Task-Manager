import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/auth";

const authAPI = {
  login: async (credentials) => {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response;
  },
  checkOtp: async (otp) => {
    const response = await axios.post(`${BASE_URL}/checkOtp`, otp);
    return response;
  },
  register: async (userData) => {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response;
  },
  // fetchUser: async (token) => {
  //   const response = await axios.get(`${BASE_URL}/user`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return response;
  // },
};

export default authAPI;
