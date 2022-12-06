import React from "react";
import "../Grid/styles.css";
import { FaRupeeSign } from "react-icons/fa";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function Grid({ coin }) {
  const {
    image,
    symbol,
    name,
    price_change_percentage_24h: percentageChange,
    current_price: CurrentPrice,
    market_cap,
    total_volume,
  } = coin;

  return (
    <a href={`coin?${coin.id}`}>
      <div
        className="coin-box"
        style={{ borderColor: percentageChange < 0 ? "var(--red)" : null }}
      >
        <div className="logo-div">
          <img src={image} />
          <div
            className="coin-info"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            <p className="symbol">{symbol}</p>
            <p className="name">{name}</p>
          </div>

          {/* <div className="trends"> */}
          {percentageChange > 0 ? (
            <TrendingUpIcon className="trends up" />
          ) : (
            <TrendingDownIcon className="trends down" />
          )}

          {/* </div> */}
        </div>
        <div className="data-div">
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
          <div className="price">
            {CurrentPrice.toLocaleString("en-IN")}
            <FaRupeeSign className="rs" />
          </div>
        </div>
        <div className="total">
          <p>Total Volume:{total_volume.toLocaleString("en-IN")}</p>
          <p>Market Cap:{market_cap.toLocaleString("en-IN")}</p>
        </div>
      </div>
    </a>
  );
}

export default Grid;
