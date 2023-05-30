import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/user";

const userAPI = {
  fetchUser: async (token) => {
    const response = await axios.get(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  editProfile: async (token, updatedData) => {
    const response = await axios.post(`${BASE_URL}/edit-profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: updatedData,
    });
    return response;
  },
  setProfileImage: async (token, file) => {
    const response = await axios.post(`${BASE_URL}/profile-image`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: file
    });
    return response;
  },
  getAllInvites: async (token) => {
    const response = await axios.get(`${BASE_URL}/requests`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  changeInviteRequest: async (token) => {
    const response = await axios.get(
      `${BASE_URL}/change-status-request/:id/:status`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  },
  getInviteRequestByStatus: async (token) => {
    const response = await axios.get(`${BASE_URL}/requests/:status`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
};

export default userAPI;
