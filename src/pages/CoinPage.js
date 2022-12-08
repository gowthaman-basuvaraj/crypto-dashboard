import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LineChart from "../components/DashBoardComponent/LineChart";

function CoinPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingChart, setLoadingChart] = useState(true);

  useEffect(() => {
    if (searchParams) {
      setLoading(true);
      const url = `https://api.coingecko.com/api/v3/coins/${searchParams}`;
      axios.get(url.slice(0, -1), { crossDomain: true }).then((response) => {
        if (response.data) {
          //   console.log(response.data);
          setData(response.data);
          setLoading(false);
        } else {
          console.log("Could not get Data");
        }
      });
    }
  }, [searchParams]);

  const chartData = {
    labels: prices?.map((data) => data[0]),
    datasets: [
      {
        data: prices?.map((data) => data[1]),
        borderWidth: 2,
        fill: false,
        tension: 0.25,
        backgroundColor: "white",
        borderColor: "white",
        pointRadius: 0,
      },
    ],
  };

  useEffect(() => {
    if (data) {
      setLoadingChart(true);
      const url = `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=INR&days=30&interval=daily`;
      axios.get(url, { crossDomain: true }).then((response) => {
        if (response.data) {
          console.log(response.data.prices);
          setPrices(response.data.prices);
          setLoadingChart(false);
        } else {
          console.log("Could not get prices");
        }
      });
    }
  }, [data]);

  https: return (
    <>
      {loading ? <Loader /> : null}
      <Header />
      <LineChart chartData={chartData} />
    </>
  );
}

export default CoinPage;
