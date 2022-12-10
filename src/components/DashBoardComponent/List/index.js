import React, { useEffect } from "react";
import styles from "./styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { FaRupeeSign } from "react-icons/fa";

function List({ coin }) {
  const {
    id,
    image,
    symbol,
    name,
    price_change_percentage_24h: percentageChange,
    current_price: CurrentPrice,
    market_cap,
    total_volume,
    last_updated,
  } = coin;

  // let updatedDate = (date) => {
  //   const time = date.split("T");
  //   const daa = time[0] + " " + time[1];
  //   const d = new Date(daa);
  //   let minutes = d.getTime();
  //   var t = new Date(minutes);
  //   var a = t.toTimeString().substring(0, 9);
  //   let ans = a + "IST " + t.toDateString();
  //   console.log(ans);
  //   return <p>{ans}</p>;
  // };

  return (
    <div className="list-wrapper1">
      <a href={`coin?${coin.id}`}>
        <td>
          <img src={image} alt="" />
        </td>
        <td>
          <p>{symbol}</p>
          <p>{name}</p>
        </td>
      </a>
      <td>
        {/* {percentageChange.toFixed(2)}% */}
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
      </td>
      <td>
        {percentageChange > 0 ? (
          <TrendingUpIcon className="trends up" />
        ) : (
          <TrendingDownIcon className="trends down" />
        )}
      </td>
      <td>
        {CurrentPrice.toLocaleString("en-IN")}
        <FaRupeeSign className="rs" />
      </td>
      <td>
        <p>
          <FaRupeeSign className="rs" />
          {total_volume.toLocaleString("en-IN")}
        </p>
      </td>
      <td>
        <p className="date">updatedDate</p>
      </td>
    </div>
  );
}

export default List;
