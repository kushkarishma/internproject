import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";
const API_URL = "https://fakestoreapi.com";

// Backend POST
  const postBackendData = async (endpoint, data) => {
  try {
    const res = await fetch(`${BACKEND_URL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("Error posting backend data:", err);
    throw err;
  }
};
// FakeStore GET
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// FakeStore POST
const postData = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// FakeStore DELETE
const deleteData = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export { fetchData, postData, deleteData, postBackendData };
