import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import DashBoardInfo from "../components/DashBoardComponent/DashBoardInfo";
import Loader from "../components/Loader";
import Search from "../components/DashBoardComponent/Search";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const filteredCoins = data?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    // console.log("Seach value is " + search);
    setSearch(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    axios.get(url, { crossDomain: true }).then((response) => {
      if (response.data) {
        setData(response.data);
      } else {
        console.log("error");
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Search handleChange={handleChange} />
          <DashBoardInfo data={filteredCoins} />
        </>
      )}
    </>
  );
}

export default Dashboard;
