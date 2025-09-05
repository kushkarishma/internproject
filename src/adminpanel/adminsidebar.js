import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar d-flex flex-column p-3">
      <h4 className="text-white mb-4">Admin Panel</h4>
      <nav className="nav flex-column">
        <NavLink className="nav-link text-white" to="/dashboard">
          📊 Dashboard
        </NavLink>

        <NavLink className="nav-link text-white" to="/products">
            📦Products
        </NavLink>

        <NavLink className="nav-link text-white" to="/adminpage/productlist">
          📋Productlist
        </NavLink>
          <NavLink className="nav-link text-white" to="/profile">
           📌Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default AdminSidebar;

