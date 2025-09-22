import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";

// ---------------------- POST ----------------------
const postBackendData = async (endpoint, data) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/${endpoint}`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; // axios auto parses JSON
  } catch (err) {
    console.error("Error posting backend data:", err.response?.data || err.message);
    throw err;
  }
};

// ---------------------- GET ----------------------
const getBackendData = async (endpoint) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache", // avoid caching
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.response?.data || error.message);
    throw error;
  }
};

// ---------------------- PUT ----------------------
const putBackendData = async (endpoint, data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${BACKEND_URL}/${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error.response?.data || error.message);
    throw error;
  }
};

// ---------------------- DELETE ----------------------
const deleteBackendData = async (endpoint) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${BACKEND_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error.response?.data || error.message);
    throw error;
  }
};

export { getBackendData, putBackendData, postBackendData, deleteBackendData };
