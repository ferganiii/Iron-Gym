import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [proteinData, setProteinData] = useState([]); // هتخزن البيانات هنا

  // ✅ جلب البيانات من API لما الصفحة تفتح
  async function fetchData() {
    try {
      const res = await axios.get("https://gym-production-8217.up.railway.app/api/protiens");
      setProteinData(res.data.docs); // حفظ البيانات
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData(); // تشغيلها عند فتح الصفحة
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Dashboard - Manage Proteins</h2>

      {/* ✅ عرض البيانات */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Calories</th>
            <th className="border p-2">Protein</th>
            <th className="border p-2">Carb</th>
            <th className="border p-2">Fat</th>
          </tr>
        </thead>
        <tbody>
          {proteinData.map((item) => (
            <tr key={item._id} className="text-center">
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.sthermal}</td>
              <td className="border p-2">{item.protein} g</td>
              <td className="border p-2">{item.carb} g</td>
              <td className="border p-2">{item.fat} g</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
