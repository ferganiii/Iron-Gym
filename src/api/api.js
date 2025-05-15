import axios from "axios";

const API = axios.create({
  baseURL: "https://gym-production-8217.up.railway.app/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchProteins = () => API.get("/protiens");  
export const addProtein = (newProtein) => API.post("/protiens", newProtein);
export const deleteProtein = (id) => API.delete(`/protiens/${id}`);

export default API;
