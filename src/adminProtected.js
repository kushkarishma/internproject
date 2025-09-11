import { Navigate, Outlet } from "react-router-dom";

function AdminProtected() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // ✅ backend se save kiya gaya role

  if (!token) return <Navigate to="/login" replace />;

  if (role !== "admin") return <Navigate to="/home" replace />;

  return <Outlet />;
}

export default AdminProtected;


