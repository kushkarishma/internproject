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
const getBackendData = async (endpoint) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// const putBackendData = async (endpoint) => {
//   try {
//     const response = await axios.get(`${BACKEND_URL}/${endpoint}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

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


// FakeStore DELETE
export const deleteBackendData = async (endpoint) => {
  const res = await fetch(`${BACKEND_URL}/${endpoint}`, {
    method: "DELETE",
  });
  return await res.json();
};


export { fetchData, getBackendData, postBackendData };
