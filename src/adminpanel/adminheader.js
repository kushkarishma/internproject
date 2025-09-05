import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function AdminHeader() {
  return (
    <nav className="navbar admin-header px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left side - Logo/Title */}
        <span className="navbar-brand mb-0 h1 text-white">Admin Panel</span>

        {/* Right side - Notification + Admin Dropdown */}
        <div className="d-flex align-items-center">
        
          <button className="btn btn-light btn-sm me-3 rounded-circle">
            🔔
          </button>

          {/* Admin Dropdown */}
          <div className="dropdown">
            <span
              className="text-white fw-bold dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Admin
            </span>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item text-danger" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
