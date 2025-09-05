import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, LogOut } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./header.css"; // custom CSS for blur

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg shadow sticky-top custom-header">
      <div className="container-fluid">
       
        <Link className="navbar-brand fw-bold text-dark" to="/">
          MyShop
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3 me-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium" to="/products">
                Products
              </Link>
            </li>

          
            <li className="nav-item position-relative">
              <Link className="nav-link text-dark" to="/addtocart">
                <ShoppingCart size={22} />
                <span className="badge bg-danger rounded-pill position-absolute top-0 start-0 translate-middle">
                  2
                </span>
              </Link>
            </li>
          </ul>

       
          <div className="d-flex ms-auto">
            <button
              onClick={handleLogout}
              className="btn btn-outline-dark btn-sm d-flex align-items-center"
            >
              <LogOut size={16} className="me-1" /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
