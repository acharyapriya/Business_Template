import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import navbarLinks from "../component/json/JsonStructure.json";
import Button from "../component/Button";

const Navbar: React.FC = () => {
 

  const handleClick = (id: string) => {
  const section = document.getElementById(id);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <nav className=" navbar navbar-expand-lg navbar-light  " style={{background:"black"}}>
      <div className="container-fluid">
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
         
         
        >
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navbarLinks?.menu.map((link, index) => (
              <li className="nav-item" key={index} >
                <Button className="nav-link btn btn-link custom-nav-btn"  onClick={() => handleClick(link.id)} text={link.name}>
                  
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
