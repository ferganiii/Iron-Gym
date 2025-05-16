import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LifeLine } from "react-loading-indicators";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../../Context/UserContext";

export default function NutritionTable({ title, bgImage, apiUrl }) {
  const [data, setData] = useState([]);
  const { token, role } = useContext(UserContext);
  const [editItem, setEditItem] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    sthermal: "",
    protein: "",
    carb: "",
    fat: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    sthermal: false,
    protein: false,
    carb: false,
    fat: false,
  });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!token) {
      console.warn("⚠️ No token found! Skipping API request.");
      return;
    }

    axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (Array.isArray(res.data.docs)) {
          setData(res.data.docs);
        } else {
          console.error("❌ API response format is incorrect:", res.data);
        }
      })
      .catch((err) => console.error("❌ Error fetching data:", err));
  }, [apiUrl, token]);

  const handleEditClick = (item) => {
    setEditItem(item._id);
    setFormData({
      name: item.name || "",
      sthermal: item.sthermal || "",
      protein: item.protein || "",
      carb: item.carb || "",
      fat: item.fat || "",
    });
    setErrors({
      name: false,
      sthermal: false,
      protein: false,
      carb: false,
      fat: false,
    });
  };

  const handleSave = async () => {
    if (!editItem) return;

    try {
      setIsloading(true);
      await axios.patch(`${apiUrl}/${editItem}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setData((prevData) =>
        prevData.map((item) =>
          item._id === editItem ? { ...item, ...formData } : item
        )
      );
      setEditItem(null);
      toast.success("تم التحديث بنجاح!");
    } catch (err) {
      console.error("❌ Error updating data:", err);
      toast.error("حدث خطأ أثناء التحديث!");
    } finally {
      setIsloading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (!token) {
        console.error("❌ No token found! User might not be authenticated.");
        return;
      }

      setIsloading(true);
      await axios.delete(`${apiUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      toast.success("تم الحذف بنجاح!");
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (err) {
      console.error("❌ Error deleting data:", err.response?.data || err.message);
      toast.error("حدث خطأ أثناء الحذف!");
    } finally {
      setIsloading(false);
    }
  };

  const handleAdd = async () => {
    try {
      if (!token) throw new Error("No token found");

      const newErrors = {
        name: !formData.name,
        sthermal: !formData.sthermal,
        protein: !formData.protein,
        carb: !formData.carb,
        fat: !formData.fat,
      };
      
      setErrors(newErrors);
      
      if (Object.values(newErrors).some(error => error)) {
        toast.error("يجب ملء جميع الحقول!");
        return;
      }

      setIsloading(true);
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setData([...data, response.data]);
      toast.success("تمت الإضافة بنجاح!");
      setIsAdding(false);
      setFormData({
        name: "",
        sthermal: "",
        protein: "",
        carb: "",
        fat: "",
      });
    } catch (err) {
      toast.error("حدث خطأ أثناء الإضافة!");
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section className="relative bg-[rgb(102,102,102,.3)]">
      <ToastContainer
        position="center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            id="wave"
            className="w-full"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 490"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="#1F1F1F" offset="0%" />
                <stop stopColor="#1F1F1F" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              d="M0,0L20,24.5C40,49,80,98,120,147C160,196,200,245,240,220.5C280,196,320,98,360,65.3C400,33,440,65,480,114.3C520,163,560,229,600,285.8C640,343,680,392,720,408.3C760,425,800,408,840,367.5C880,327,920,261,960,245C1000,229,1040,261,1080,236.8C1120,212,1160,131,1200,81.7C1240,33,1280,16,1320,8.2C1360,0,1400,0,1440,24.5C1480,49,1520,98,1560,98C1600,98,1640,49,1680,57.2C1720,65,1760,131,1800,138.8C1840,147,1880,98,1920,89.8C1960,82,2000,114,2040,138.8C2080,163,2120,180,2160,212.3C2200,245,2240,294,2280,318.5C2320,343,2360,343,2400,334.8C2440,327,2480,310,2520,302.2C2560,294,2600,294,2640,261.3C2680,229,2720,163,2760,138.8C2800,114,2840,131,2860,138.8L2880,147L2880,490L0,490Z"
            />
          </svg>
          <h2 className="absolute max-sm:ms-8 bottom-64 max-sm:bottom-28 left-1/4 transform -translate-x-1/2 text-white font-archivo lg:text-5xl max-md:text-4xl max-sm:text-3xl">
            {title} Sources
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-xl lg:text-4xl font-archivo">
          The richest sources of {title} <br /> and the average values and nutrients per 100g
        </h2>

        {role === "admin" && (
          <div className="flex justify-end">
            <button
              className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 text-4xl"
              onClick={() => {
                setIsAdding(true);
                setErrors({
                  name: false,
                  sthermal: false,
                  protein: false,
                  carb: false,
                  fat: false,
                });
              }}
            >
              + Add New Item
            </button>
          </div>
        )}

        <div className="relative w-full overflow-x-auto">
          <table className="min-w-full text-left text-gray-500 dark:text-gray-400 table-auto">
            <thead className="text-sm sm:text-base md:text-lg lg:text-3xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-orange-500">
              <tr>
                <th className="px-2 py-3 text-center">Name</th>
                <th className="px-2 py-3">Calories</th>
                <th className="px-2 py-3">Protein</th>
                <th className="px-2 py-3">Carb</th>
                <th className="px-2 py-3">Fats</th>
                {role === "admin" && (
                  <>
                    <th className="px-2 py-3">Edit</th>
                    <th className="px-2 py-3">Delete</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm md:text-base lg:text-4xl text-center">
              {data.length ? (
                data.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-800 transition-all duration-500 bg-white border-y-[1px] dark:bg-[rgb(102,102,102,.3)] dark:border-orange-600 border-gray-200">
                    <td className="px-2 py-5 font-Andika">{item?.name || "N/A"}</td>
                    <td className="px-2 py-5 font-Andika">{item?.sthermal ?? "N/A"} kcal</td>
                    <td className="px-2 py-5 font-Andika">{item?.protein ?? "N/A"} g</td>
                    <td className="px-2 py-5 font-Andika">{item?.carb ?? "N/A"} g</td>
                    <td className="px-2 py-5 font-Andika">{item?.fat ?? "N/A"} g</td>

                    {role === "admin" && (
                      <td className="px-2 py-5 font-Andika">
                        <button
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                          onClick={() => handleEditClick(item)}
                        >
                          Edit
                        </button>
                      </td>
                    )}

                    {role === "admin" && (
                      <td className="px-2 py-5 font-Andika">
                        <button
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    <Loading />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {role === "admin" && (editItem || isAdding) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-500 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">{editItem ? "Edit" : "Add"} {title}</h2>
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-orange-600'} bg-gray-400 text-orange-800 rounded focus:outline-none focus:ring-2 focus:ring-orange-600`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">هذا الحقل مطلوب</p>}
              </div>
              
              <div>
                <input
                  type="number"
                  placeholder="Calories"
                  value={formData.sthermal || ""}
                  onChange={(e) => {
                    const value = Math.max(0, Number(e.target.value));
                    setFormData({ ...formData, sthermal: value });
                  }}
                  className={`w-full p-2 border ${errors.sthermal ? 'border-red-500' : 'border-orange-600'} bg-gray-400 text-orange-800 rounded focus:outline-none focus:ring-2 focus:ring-orange-600`}
                />
                {errors.sthermal && <p className="text-red-500 text-sm mt-1">هذا الحقل مطلوب</p>}
              </div>
              
              <div>
                <input
                  type="number"
                  placeholder="Protein"
                  value={formData.protein || ""}
                  onChange={(e) => {
                    const value = Math.max(0, Number(e.target.value));
                    setFormData({ ...formData, protein: value });
                  }}
                  className={`w-full p-2 border ${errors.protein ? 'border-red-500' : 'border-orange-600'} bg-gray-400 text-orange-800 rounded focus:outline-none focus:ring-2 focus:ring-orange-600`}
                />
                {errors.protein && <p className="text-red-500 text-sm mt-1">هذا الحقل مطلوب</p>}
              </div>
              
              <div>
                <input
                  type="number"
                  placeholder="Carbs"
                  value={formData.carb || ""}
                  onChange={(e) => {
                    const value = Math.max(0, Number(e.target.value));
                    setFormData({ ...formData, carb: value });
                  }}
                  className={`w-full p-2 border ${errors.carb ? 'border-red-500' : 'border-orange-600'} bg-gray-400 text-orange-800 rounded focus:outline-none focus:ring-2 focus:ring-orange-600`}
                />
                {errors.carb && <p className="text-red-500 text-sm mt-1">هذا الحقل مطلوب</p>}
              </div>
              
              <div>
                <input
                  type="number"
                  placeholder="Fats"
                  value={formData.fat || ""}
                  onChange={(e) => {
                    const value = Math.max(0, Number(e.target.value));
                    setFormData({ ...formData, fat: value });
                  }}
                  className={`w-full p-2 border ${errors.fat ? 'border-red-500' : 'border-orange-600'} bg-gray-400 text-orange-800 rounded focus:outline-none focus:ring-2 focus:ring-orange-600`}
                />
                {errors.fat && <p className="text-red-500 text-sm mt-1">هذا الحقل مطلوب</p>}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button 
                onClick={() => { 
                  setEditItem(null); 
                  setIsAdding(false); 
                  setErrors({
                    name: false,
                    sthermal: false,
                    protein: false,
                    carb: false,
                    fat: false,
                  });
                }} 
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Cancel
              </button>
              <button 
                onClick={editItem ? handleSave : handleAdd} 
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                disabled={isloading}
              >
                {isloading ? "Processing..." : (editItem ? "Save" : "Add")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}