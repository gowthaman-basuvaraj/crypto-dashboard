import "../DashBoardInfo/style.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Grid from "../Grid";
import List from "../List";

function DashBoardInfo({ data }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  return (
    <div className="tabs-wrapper">
      <TabContext value={value}>
        <TabList variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Grid" sx={style} />
          <Tab label="List" sx={style} />
        </TabList>
        <TabPanel value={0}>
          <div className="grid-flex">
            {data.length === 0 ? (
              <p>
                No Crypto Currencies Found <br />
              </p>
            ) : (
              data.map((coin, i) => {
                return <Grid coin={coin} key={i} />;
              })
            )}
          </div>
        </TabPanel>
        <TabPanel value={1}>
          {/* <div className="list-flex"> */}
          <table className="list-flex">
            <tr>
              {data.length === 0 ? (
                <p className="empty">
                  No Crypto Currencies Found <br />
                </p>
              ) : (
                data.map((coin, i) => {
                  return <List coin={coin} key={i} />;
                })
              )}
            </tr>
          </table>
          {/* </div> */}
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default DashBoardInfo;
