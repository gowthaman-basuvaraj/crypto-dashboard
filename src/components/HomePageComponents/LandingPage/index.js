import { style } from "@mui/system";
import React from "react";
import "./styles.css";
import photo from "../../../imgs/iphone.png";
import gradient from "../../../imgs/gradient.png";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

function LandingPageComponent() {
  return (
    <>
      <div className="wrapper">
        <motion.h1
          className="big-heading"
          initial={{ opacity: 0, y: 50 }}
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
