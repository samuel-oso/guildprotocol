import DrawerIcon from "../images/DrawerIcon.svg";
import { Drawer as MantineDrawer } from "@mantine/core";
import "../styles/components/Drawer.css";
import { useLocation, useNavigate } from "react-router-dom";

type DrawerProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

function Drawer(props: DrawerProps) {
  const { opened = false, setOpened } = props;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <MantineDrawer
      className="drawer"
      opened={opened}
      onClose={() => setOpened(false)}
      position="right"
      withCloseButton={false}
    >
      <aside className="drawer">
        <div className="drawer-container">
          <div
            onClick={() => navigate("")}
            className={`drawer-card ${pathname === "" && "card-active"}`}
          >
            <p>
              <img src={DrawerIcon} alt={DrawerIcon}></img>
              Home
              <img src={DrawerIcon} alt={DrawerIcon}></img>
            </p>
          </div>
          <div className="drawer-card">
            <p>
              <img src={DrawerIcon} alt={DrawerIcon}></img>
              Gameplay
              <img className="" src={DrawerIcon} alt={DrawerIcon}></img>
            </p>
          </div>
          <div className="drawer-card">
            <p>
              <img src={DrawerIcon} alt={DrawerIcon}></img>
              Tokens
              <img src={DrawerIcon} alt={DrawerIcon}></img>
            </p>
          </div>
          <div className="drawer-card">
            <p>
              <img src={DrawerIcon} alt={DrawerIcon}></img>
              Roadmap
              <img src={DrawerIcon} alt={DrawerIcon}></img>
            </p>
          </div>
          <div className="drawer-card">
            <p>
              <img src={DrawerIcon} alt={DrawerIcon}></img>
              Community
              <img src={DrawerIcon} alt={DrawerIcon}></img>
            </p>
          </div>
          <div className="drawer-card">
            <p>
              <img src={DrawerIcon} alt={DrawerIcon}></img>
              Whitepaper
              <img src={DrawerIcon} alt={DrawerIcon}></img>
            </p>
          </div>
        </div>
      </aside>
    </MantineDrawer>
  );
}

export default Drawer;
