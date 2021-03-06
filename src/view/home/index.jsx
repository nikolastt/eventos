import React, { useEffect, useState } from "react";
import CardEvento from "../../components/card-evento";
import NavBar from "../../components/navbar";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase from "../../config/firebase";

import "./home.css";

function Home({ match }) {
  const [eventos, setEventos] = useState([]);
  const listaEventos = [];
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    const db = getFirestore(firebase);
    const colref = collection(db, "eventos");

    getDocs(colref).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (
          doc.data().titulo.indexOf(pesquisa) >= 0 ||
          doc.data().descricao.indexOf(pesquisa) >= 0
        ) {
          listaEventos.push({
            ...doc.data(),
            id: doc.id,
          });
        }
      });
      setEventos(listaEventos);
    });
  }, [pesquisa]);

  return (
    <div className="home">
      <NavBar />

      <div className="row pesquisa d-flex  col-12 m-0 p-4">
        <div className="input col-7">
          <input
            onChange={(e) => {
              setPesquisa(e.target.value);
            }}
            type="text"
            className="form-control form-control-home text-center"
            placeholder="Pesquisar evento"
          />
        </div>
      </div>

      <div className="d-flex flex-wrap w-100   justify-content-around">
        {eventos.map((item) => (
          <CardEvento
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            descricao={item.descricao}
            url={item.url}
            visualizacoes={item.visualizacoes}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
