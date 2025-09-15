import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar d-flex flex-column p-3">
      <h4 className="text-white mb-4">Admin Panel</h4>
      <nav className="nav flex-column">
        <NavLink className="nav-link text-black" to="/dashboard">
          📊 Dashboard
        </NavLink>

        <NavLink className="nav-link text-black" to="/products">
          📦Products
        </NavLink>

        <NavLink className="nav-link text-black" to="/adminpage/productlist">
          📋Productlist
        </NavLink>
        <NavLink className="nav-link text-black" to="/profile">
          📌Profile
        </NavLink>
        <NavLink className="nav-link text-black" to="/adminpage/adminuser">
          👤 View Users
        </NavLink>
      </nav>
    </aside>
  );
}

export default AdminSidebar;

