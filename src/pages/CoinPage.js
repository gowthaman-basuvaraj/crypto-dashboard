import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

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
      axios.get(url.slice(0, -1)).then((response) => {
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

  useEffect(() => {
    if (data) {
      setLoadingChart(true);
      const url = `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=INR&days=30&interval=daily`;
      axios.get(url).then((response) => {
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
      <h1>{searchParams}</h1>
    </>
  );
}

export default CoinPage;
