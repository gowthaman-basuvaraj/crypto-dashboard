import React from "react";
import "./styles.css";
import { FaRupeeSign } from "react-icons/fa";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function Grid({ coin }) {
  const {
    image,
    symbol,
    name,
    price_change_percentage_24h: percentageChange,
  } = coin;

  return (
    <div className="coin-box">
      <div className="logo-div">
        <img src={image} />
        <div className="coin-info">
          <p className="symbol">
            {symbol}-{<FaRupeeSign />}
          </p>
          <p className="name">{name}</p>
        </div>
      </div>
      <div className="data-div">
        {/* Add increasing nd dec at top right corner */}
        <div
          className="chip"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
            borderColor: percentageChange > 0 ? "var(--green)" : "var(--red)",
          }}
        >
          {percentageChange > 0 ? (
            <span>{"+" + percentageChange.toFixed(2) + "%"}</span>
          ) : (
            <span>{percentageChange.toFixed(2) + "%"}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Grid;
