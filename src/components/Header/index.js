import React from "react";
import "./styles.css";
import Button from "../Button";
import Dashboard from "../../pages/Dashboard";
import Compare from "../../pages/Compare";
import Home from "../../pages/Home";
import Drawer from "./Drawer";

function Header() {
  return (
    <>
      <div className="navbar">
        <h1 className="heading">
          <a href="/">CryptoTracker</a>
          <span style={{ color: "var(--blue)" }}>.</span>
        </h1>
        <div className="links-flex">
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
            <p className="links">
              <Button text="Dashboard" />
            </p>
          </a>
        </div>
        <div className="menu-div">
          <Drawer />
        </div>
      </div>
    </>
  );
}

export default Header;
