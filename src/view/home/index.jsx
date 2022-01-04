import React from "react";
import { useSelector } from "react-redux";
import CardEvento from "../../components/card-evento";
import NavBar from "../../components/navbar";
import "./home.css";

function Home() {
  return (
    <>
      <NavBar />
      <CardEvento />
    </>
  );
}

export default Home;
