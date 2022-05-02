import React from "react";
import "../styles/components/Burger.css";

function Burger() {
  return (
    <div className="menu-icon">
      <input className="menu-icon-checkbox" type="checkbox" />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Burger;
