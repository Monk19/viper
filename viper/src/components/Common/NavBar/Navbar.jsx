import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
