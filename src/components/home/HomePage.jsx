import React from "react";
import { Container } from "react-bootstrap";

import BottomSection from "./BottomSection";
import MyNavbar from "../Navbar";
import Footer from "../Footer";
import imgLg from "../../assets/images/jumbotron_1200.jpg";
import imgMd from "../../assets/images/jumbotron_992.jpg";
import imgSm from "../../assets/images/jumbotron_768.jpg";
import blurred from "../../assets/images/blury-resturant.png";
import LazyImg from "../LazyImg";
import styles from "../../styles/HomePage.module.css";

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <Container className={`${styles.Container} mt-3`}>
        <LazyImg
          blurred={blurred}
          src={imgSm}
          srcSet={`${imgSm} 768w, ${imgMd} 992w, ${imgLg} 1440w`}
          sizes="(max-width: 768px) 100vw, (max-width: 992px) 100vw, 90vw"
          style={{ boxShadow: "0 0 10px 0 #000" }}
        />
        <BottomSection />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
