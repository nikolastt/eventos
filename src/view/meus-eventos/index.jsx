import React, { useEffect, useState } from "react";
import CardEvento from "../../components/card-evento";
import NavBar from "../../components/navbar";
import {
  collection,
  getDocs,
  query,
  getFirestore,
  where,
} from "firebase/firestore";
import firebase from "../../config/firebase";
import { useSelector } from "react-redux";

import "./meus-eventos.css";

function MeusEventos() {
  const [eventos, setEventos] = useState([]);
  const listaEventos = [];
  const [pesquisa, setPesquisa] = useState("");

  const usuarioEmail = useSelector((state) => state.usuarioEmail);

  useEffect(() => {
    const db = getFirestore(firebase);
    const colref = collection(db, "eventos");
    const q = query(colref, where("usuarioEmail", "==", usuarioEmail));
    getDocs(q).then((snapshot) => {
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

      <div className="row pesquisa  w-100 m-0 p-4">
        <input
          onChange={(e) => {
            setPesquisa(e.target.value);
          }}
          type="text"
          className="form-control form-control-meus-eventos text-center"
          placeholder="Pesquisar evento"
        />
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

export default MeusEventos;
