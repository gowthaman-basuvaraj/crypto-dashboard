import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPageComponent from "../components/HomePageComponents/LandingPage";

function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <LandingPageComponent />
      <Footer />
    </div>
  );
}

export default Home;
