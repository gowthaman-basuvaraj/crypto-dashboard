import React from "react";
import "./styles.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectComponent({ value, handleChange, data, filter }) {
  return (
    <div>
      <Select
        value={value}
        onChange={handleChange}
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
        {data
          .filter((coin) => coin.id !== filter)
          .map((item, i) => {
            return (
              <MenuItem key={i} value={item.id}>
                {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
              </MenuItem>
            );
          })}
      </Select>
    </div>
  );
}

export default SelectComponent;
