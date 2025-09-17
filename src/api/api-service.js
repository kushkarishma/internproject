import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";

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

const getBackendData = async (endpoint) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache",   //  add this
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.response?.data || error.message);
    throw error;
  }
};

const putBackendData = async (endpoint, data) => {
  try {
    const token = localStorage.getItem("token"); //  get token from localStorage
    const response = await axios.put(`${BACKEND_URL}/${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` // send token
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error.response?.data || error.message);
    throw error;
  }
};


// FakeStore DELETE
export const deleteBackendData = async (endpoint) => {
  const res = await fetch(`${BACKEND_URL}/${endpoint}`, {
    method: "DELETE",
  });
  return await res.json();
};


export { getBackendData, putBackendData, postBackendData };
