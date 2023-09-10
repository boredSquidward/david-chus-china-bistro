import React from "react";
import MainImg from "./MainImg";
import BottomSection from "./BottomSection";
import MyNavbar from "../Navbar";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <MainImg />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Home;
