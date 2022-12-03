import React from "react";
import "../List/style1.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { FaRupeeSign } from "react-icons/fa";

function List({ coin }) {
  const {
    image,
    symbol,
    name,
    price_change_percentage_24h: percentageChange,
    current_price: CurrentPrice,
    market_cap,
    total_volume,
    last_updated,
  } = coin;

  return (
    <div className="list-wrapper1">
      <td>
        <img src={image} />
      </td>

      <td>
        <p className="symbol td-text">{name}</p>
        <p className="name td-text">{symbol}</p>
      </td>

      <td
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
      </td>
      <td>
        {percentageChange > 0 ? (
          <TrendingUpIcon className="trends up" />
        ) : (
          <TrendingDownIcon className="trends down" />
        )}
      </td>

      <td>
        <div>
          <FaRupeeSign className="rs" />
          {CurrentPrice.toLocaleString("en-IN")}
        </div>
      </td>

      <td>
        <div className="total">
          <p>{total_volume.toLocaleString("en-IN")}</p>
        </div>
      </td>

      {/* <td>
        <div className="total">
          <p>{market_cap.toLocaleString("en-IN")}</p>
        </div>
      </td> */}
      <td>
        <p>{last_updated}</p>
      </td>
    </div>
  );
}

export default List;
