import { useState } from "react";
import { FiHome, FiUsers, FiSettings, FiLogOut, FiBarChart } from "react-icons/fi";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const menuItems = [
    { name: "Overview", icon: <FiHome /> },
    { name: "Users", icon: <FiUsers /> },
    { name: "Analytics", icon: <FiBarChart /> },
    { name: "Settings", icon: <FiSettings /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-5">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center gap-3 p-3 w-full rounded-md transition ${
                activeTab === item.name ? "bg-orange-500" : "hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab(item.name)}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </nav>
        <button className="mt-auto flex items-center gap-3 p-3 w-full rounded-md bg-red-600 hover:bg-red-700">
          <FiLogOut /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{activeTab}</h2>
          <span className="text-gray-700">Welcome, Admin</span>
        </header>

        {/* Overview Section */}
        {activeTab === "Overview" && (
          <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Total Users" count="1,245" color="bg-blue-500" />
            <Card title="Total Workouts" count="315" color="bg-green-500" />
            <Card title="Total Posts" count="860" color="bg-orange-500" />
          </section>
        )}

        {/* Users Table */}
        {activeTab === "Users" && <UsersTable />}
      </main>
    </div>
  );
}

// Card Component
function Card({ title, count, color }) {
  return (
    <div className={`p-6 text-white rounded-lg shadow-md ${color}`}>
      <h3 className="text-lg">{title}</h3>
      <p className="text-2xl font-bold mt-2">{count}</p>
    </div>
  );
}

// Users Table Component
function UsersTable() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Alex Johnson", email: "alex@example.com", role: "Moderator" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-4">Users List</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
