import { FiHome, FiUsers, FiSettings, FiLogOut, FiBarChart } from "react-icons/fi";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation(); // لمعرفة الصفحة الحالية

  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: <FiHome /> },
    { name: "Users", path: "/dashboard/CardDash", icon: <FiUsers /> },
    { name: "Analytics", path: "/dashboard/analytics", icon: <FiBarChart /> },
    { name: "Settings", path: "/dashboard/settings", icon: <FiSettings /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-5">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-4 flex-grow">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-3 w-full rounded-md transition ${
                location.pathname === item.path ? "bg-orange-500" : "hover:bg-gray-800"
              }`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <Link to="/">
          <button className="mt-auto flex items-center gap-3 p-3 w-full rounded-md bg-red-600 hover:bg-red-700">
            <FiLogOut /> Logout
          </button>
        </Link>
        <Link to="/dashboard/proteins">
  <button className="mt-auto flex items-center gap-3 p-3 w-full rounded-md bg-red-600 hover:bg-red-700">
    <FiLogOut /> Proteins
  </button>
</Link>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">
            {menuItems.find((item) => location.pathname.includes(item.path))?.name || "Dashboard"}
          </h2>
          <span className="text-gray-700">Welcome, Admin</span>
        </header>

        {/* 🔥 مكان عرض الصفحات الفرعية */}
        <Outlet />
      </main>
    </div>
  );
}
