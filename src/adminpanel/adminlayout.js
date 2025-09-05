import { Outlet } from "react-router-dom";
import AdminSidebar from "./adminsidebar";
import AdminHeader from "./adminheader";
import "./adminlayout.css"; // CSS file alag se banao

function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <AdminSidebar />
      </aside>

      {/* Main area */}
      <div className="admin-main">
        <header className="admin-header">
          <AdminHeader />
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
