import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/project";

const projectAPI = {
  getProjectsList: async (token) => {
    const response = await axios.get(`${BASE_URL}/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  createProject: async (token, data) => {
    const response = await axios.post(`${BASE_URL}/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  removeProject: async (token, id) => {
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

export default projectAPI;
