import React, { useState } from "react";
import Burger from "./Burger";
import Logo from "../images/Logo.svg";
import Drawer from "./Drawer";

function Navbar() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const handleDrawer = () => {
    setDrawerOpened(!drawerOpened);
  };

  return (
    <>
      <nav className="nav">
        <a href="">
          <img className="logo" src={Logo} alt={Logo}></img>
        </a>
        <div className="nav-links">
          <ul>
            <li className="nav-mr">Home</li>
            <li className="nav-mr">Gameplay</li>
            <li className="nav-mr">Tokens</li>
            <li className="nav-mr">Roadmap</li>
            <li className="nav-mr">Community</li>
            <li>Whitepaper</li>
          </ul>
        </div>
        <div className="nav-btn">
          <a>Join Discord</a>
        </div>
        <Drawer opened={drawerOpened} setOpened={setDrawerOpened} />
        <div onClick={handleDrawer}>
          <Burger />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
