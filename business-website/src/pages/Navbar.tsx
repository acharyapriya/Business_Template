import React from "react";
import navbarLinks from "../component/json/JsonStructure.json";

const Navbar: React.FC = () => {
  const handleClick = (action: string) => {
    // handle navigation or other logic here
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar_header">
      <div className="container-fluid">
        {/* Brand or Logo */}
        <a className="navbar-brand" href="#">MyBrand</a>

        {/* Toggler button for mobile */}
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

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {navbarLinks?.menu.map((link, index) => (
              <li className="nav-item" key={index}>
                <button
                  className={`nav-link btn btn-link ${link.type === "active" ? "active" : ""}`}
                  onClick={() => handleClick(link.action)}
                  style={{ color: "#bfbfbf" }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
