import axios from "axios";


const API_URL = "https://fakestoreapi.com";
// get data//
const fetchData = async (endpoint) => {
    try {
        let url = `${API_URL}/${endpoint}`;

        const response = await axios.get(url);
        const allData = response.data;

        return allData

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
    
};

//post data

const Postdata = async (endpoint, payload) => {
    try {
        let url = `${API_URL}/${endpoint}`;
        const response = await axios.post(url, payload); 
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
};

export { fetchData, Postdata }