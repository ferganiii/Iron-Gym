import axios from "axios";

const API = axios.create({
  baseURL: "https://gym-production-8217.up.railway.app/api",
});

// ✅ إضافة التوكن تلقائيًا لكل الطلبات
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // جلب التوكن من localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ الدوال الخاصة بالبروتينات
export const fetchProteins = () => API.get("/protiens");  
export const addProtein = (newProtein) => API.post("/protiens", newProtein);
export const deleteProtein = (id) => API.delete(`/protiens/${id}`);

export default API;
