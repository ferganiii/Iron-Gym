import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    // تخزين بيانات الحساب بشكل تجريبي
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // تحويل المستخدم لصفحة تسجيل الدخول
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-slate-950">
      <form className="bg-gray-800 p-6 rounded-lg" onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input type="email" placeholder="Email" className="block w-full mb-2 p-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="block w-full mb-2 p-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
