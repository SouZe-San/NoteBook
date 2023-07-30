import React from "react";

// Styles
import "./style.scss";
const Navbar = () => {
  return (
    <div className="flex flex-col gap-14 h-full">
      <div className="logo_section">ThisIsLogo</div>
      <nav className="main_nav">
        <div className="nav_items before:bg-[#ff048a]">
          <div className="nav_button">Notes</div>
        </div>
        <div className="nav_items before:bg-[#60ff04]">
          {" "}
          <div className="nav_button">Home</div>
        </div>
        <div className="nav_items before:bg-[#0496ff]">
          {" "}
          <div className="nav_button">About</div>
        </div>
      </nav>

      <div className="auth h-full">
        <h3>
          Are you a member? <span className="auth_link">Login</span>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
