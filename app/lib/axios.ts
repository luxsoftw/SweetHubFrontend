import axios from "axios";

const api = axios.create({
   baseURL: "https://sweethubbackend.onrender.com",
});

export default api;
