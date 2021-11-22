import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar  fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand ps-5" href="#">
            Bool
          </a>
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
            <ul className="navbar-nav ms-auto pe-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Maize
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tomato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
