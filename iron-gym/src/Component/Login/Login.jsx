import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isAuthenticated", "true"); // حفظ حالة الدخول
      navigate("/"); // تحويل المستخدم لصفحة الـ Home
    } else {
      alert("Incorrect Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-black">
      <form className="bg-gray-800 p-6 rounded-lg" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="block w-full mb-2 p-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="block w-full mb-2 p-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="bg-green-500 px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
