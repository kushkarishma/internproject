
import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container">
          <div className="row w-100 align-items-center">

            {/* -------------------right--------------------------- */}
            <div className="col-lg-3 col-5 d-flex align-items-center icons-sec">
              <div className="icons-group">

                <a href="#" className="btn btn-contact d-none d-lg-inline-block">צור קשר</a>
                <a href="/products"><img src="/shop-beg.png" alt="Bag" width="26" /></a>
                <a href="#"><img src="/user.png" alt="User" width="26" /></a>
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
              </div>
            </div>

            {/* -------------------center---------------------- */}
            <div className="col-lg-6 col-2">
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav text-center">
                  <li className="nav-item"><a className="nav-link active" href="#">דף הבית</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">אודות</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">שירותים</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">מוצרים</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">בלוג</a></li>
                </ul>
              </div>
            </div>

            {/* ------------------left---------------------------- */}

            <div className="col-lg-3 col-5 text-end logo-sec">
              <a className="navbar-brand fw-bold" href="#">
                <img src="/logo.png" alt="Logo" width="220" height="65" />
              </a>
            </div>



          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
