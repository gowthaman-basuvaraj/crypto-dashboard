import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import "./styles.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  return (
    <div>
      <div className="menu-button">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon style={{ color: "var(--white)" }} />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <div className="drawer-div">
          <a href="/">
            <p className="links">Home</p>
          </a>
          <a href="/compare">
            <p className="links">Compare</p>
          </a>
          <a href="/about-us">
            <p className="links">About Us</p>
          </a>
          <a href="/dashboard">
            <p className="links">Dashboard</p>
          </a>
          <div className="line"></div>
        </div>
      </Drawer>
    </div>
  );
}
