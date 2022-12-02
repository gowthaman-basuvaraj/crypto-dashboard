import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import DashBoardInfo from "../components/DashBoardComponent/DashBoardInfo";

function Dashboard() {
  const [data, setData] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url).then((response) => {
      if (response.data) {
        setData(response.data);
      } else {
        console.log("error");
      }
    });
  }, []);

  return (
    <>
      <Header />
      <DashBoardInfo data={data} />
    </>
  );
}

export default Dashboard;
