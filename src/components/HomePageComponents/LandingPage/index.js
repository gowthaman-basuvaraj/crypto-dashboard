import { style } from "@mui/system";
import React from "react";
import "./styles.css";
import photo from "../../../imgs/iphone.png";
import gradient from "../../../imgs/gradient.png";
import { motion } from "framer-motion";
import { duration } from "@mui/material";
import Button from "../../Button";
import OutlinedButton from "../../OutlinedButton";
import { RWebShare } from "react-web-share";

function LandingPageComponent() {
  return (
    <>
      <div className="wrapper">
        <div className="heading-container">
          <motion.h1
            className="big-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 2 }}
          >
            <span className="stroke">
              Track Crypto <br />
            </span>
            <span className="big-heading-blue">
              Real Time
              <span>.</span>
            </span>
          </motion.h1>
          <p className="para">
            Track Crypto through a public API in real time.Visit the Dashboard
            to do so!
          </p>
          <div className="button-div">
            <a href="/dashboard">
              <Button text={"Dashboard"} />
            </a>
            <RWebShare
              data={{
                text: "Checkout my CryptoTracker made using React",
                url: "https://google.com",
                title: "CryptoTracker",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              {/* <button>Share 🔗< /button> */}
              <button className="btn">
                <OutlinedButton text={"Share"} />
              </button>
            </RWebShare>
          </div>
        </div>
        <div className="img-box">
          <img src={gradient} alt="gradient" className="gradient" />
          <motion.img
            src={photo}
            alt="photo"
            className="phone"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default LandingPageComponent;
