import React, { useState } from "react";
import CompareGraph from "../components/ComparePageComponents/CompareGraph";
import ListFlex from "../components/ComparePageComponents/ListFlex";
import SelectCoins from "../components/ComparePageComponents/SelectCoins";
import Header from "../components/Header";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1_desc, setCrypto1_desc] = useState("");
  const [crypto2_desc, setCrypto2_desc] = useState("");

  return (
    <>
      <Header />
      <SelectCoins
        crypto1={crypto1}
        crypto2={crypto2}
        setCrypto1={setCrypto1}
        setCrypto2={setCrypto2}
        days={days}
        setDays={setDays}
      />
      <CompareGraph crypto1={crypto1} crypto2={crypto2} days={days} />
      <ListFlex
        crypto1={crypto1}
        crypto2={crypto2}
        // setCrypto1Desc={setCrypto1_desc}
        // setCrypto2Desc={setCrypto2_desc}
      />
    </>
  );
}

export default ComparePage;
