import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectComponent from "../Select";
import "./styles.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectCoins({
  crypto1,
  crypto2,
  setCrypto1,
  setCrypto2,
  days,
  setDays,
}) {
  const [data, setData] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const handleChange1 = (e) => {
    setCrypto1(e.target.value);
  };
  const handleChange2 = (e) => {
    // console.log("Seach value is " + search);
    setCrypto2(e.target.value);
  };
  const handleChange3 = (e) => {
    // console.log("Seach value is " + search);
    setDays(e.target.value);
  };

  useEffect(() => {
    axios.get(url, { crossDomain: true }).then((response) => {
      if (response.data) {
        setData(response.data);
      } else {
        console.log("error");
      }
    });
  }, []);

  return (
    <div className="select-flex">
      <div className="label">
        <p>Coin 1:</p>
        <SelectComponent
          value={crypto1}
          handleChange={handleChange1}
          data={data}
          filter={crypto2}
        />
      </div>
      <div className="label">
        <p>Coin 2:</p>
        <SelectComponent
          value={crypto2}
          handleChange={handleChange2}
          data={data}
          filter={crypto1}
        />
      </div>
      <span className="label">
        <p>Days:</p>
        <Select
          value={days}
          label="Days"
          onChange={handleChange3}
          className="select-days"
          sx={{
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
          }}
        >
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={90}>90</MenuItem>
        </Select>
      </span>
    </div>
  );
}

export default SelectCoins;
