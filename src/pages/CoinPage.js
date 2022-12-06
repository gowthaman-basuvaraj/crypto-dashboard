import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";

function CoinPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchParams) {
      setLoading(true);
      const url = `https://api.coingecko.com/api/v3/coins/${searchParams}`;
      //   axios.get(url.slice(0, -1)).then((response) => {
      //     if (response.data) {
      //       console.log(response.data);
      //       setData(response.data);
      //       setLoading(false);
      //     } else {
      //       console.log("Could not get Data");
      //     }
      //   });
    }
  }, [searchParams]);

  return (
    <>
      {loading ? <Loader /> : null}
      <Header />
      <h1>{searchParams}</h1>
    </>
  );
}

export default CoinPage;
