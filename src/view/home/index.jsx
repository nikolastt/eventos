import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardEvento from "../../components/card-evento";
import NavBar from "../../components/navbar";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase from "../../config/firebase";

import "./home.css";

function Home() {
  const [eventos, setEventos] = useState([]);
  const listaEventos = [];

  useEffect(() => {
    const db = getFirestore(firebase);
    const colref = collection(db, "eventos");
    getDocs(colref).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listaEventos.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setEventos(listaEventos);
    });
  }, []);

  return (
    <div className="home">
      <NavBar />
      <div className="d-flex  flex-wrap justify-content-center">
        {eventos.map((item) => (
          <CardEvento
            titulo={item.titulo}
            descricao={item.descricao}
            key={item.id}
            url={item.url}
            visualizacoes={item.visualizacoes}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
