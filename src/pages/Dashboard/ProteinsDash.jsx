
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Protein from "../../Component/protein/Protein";
import { UserContext } from "../../Context/UserContext";

const ProteinsDash = () => {
  const { token } = useContext(UserContext);
  const [ProteinsDash, setProteinsDashDash] = useState([]);
  const [newProtein, setNewProtein] = useState({
    name: "",
    sthermal: "",
    protein: "",
    carb: "",
    fat: "",
  });

  useEffect(() => {
    if (!token) return;
    getProteinsDash();
  }, [token]);  

  const getProteinsDash = async () => {
    try {
      const response = await axios.get("https://gym-production-8217.up.railway.app/api/protiens", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProteinsDashDash(response.data.docs);
    } catch {
      toast.error("فشل في جلب البروتينات!");
    }
  };

  async function AddProteinsDash() {
    if (!newProtein.name.trim()) return toast.error("يجب إدخال اسم البروتين!");
    if (!newProtein.sthermal || !newProtein.protein || !newProtein.carb || !newProtein.fat) {
      return toast.error("يجب إدخال جميع القيم الغذائية!");
    }

    try {
      const { data } = await axios.post(
        "https://gym-production-8217.up.railway.app/api/protiens",
        {
          name: newProtein.name,
          sthermal: Number(newProtein.sthermal),
          protein: Number(newProtein.protein),
          carb: Number(newProtein.carb),
          fat: Number(newProtein.fat),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setProteinsDashDash((protein) => [...protein, data]);
      setNewProtein({ name: "", sthermal: "", protein: "", carb: "", fat: "" });
      toast.success("تمت إضافة البروتين!");
    } catch {
      toast.error("فشل في إضافة البروتين!");
    }
  }

  

  return (
    <>
     

      </>
  );
};

export default ProteinsDash;
