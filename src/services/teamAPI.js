import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/team";

const teamAPI = {
  getTeamsList: async (token) => {
    const response = await axios.get(`${BASE_URL}/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  createTeam: async (token, data) => {
    const response = await axios.post(`${BASE_URL}/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  removeTeam: async (token, id) => {
    const response = await axios.delete(`${BASE_URL}/remove/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  editProject: async (token, id) => {
    const response = await axios.put(`${BASE_URL}/edit/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
};

export default teamAPI;
