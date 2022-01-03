import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/navbar";
import "./home.css";

function Home() {
  return (
    <>
      <NavBar />;<h1>Email: {useSelector((state) => state.usuarioEmail)}</h1>
      <h1>Usuário logado: {useSelector((state) => state.usuarioLogado)}</h1>
    </>
  );
}

export default Home;
