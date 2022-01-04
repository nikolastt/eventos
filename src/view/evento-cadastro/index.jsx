import firebase from "../../config/firebase";
import React, { useState } from "react";
import NavBar from "../../components/navbar";
import "./evento-cadastro.css";
import { useSelector } from "react-redux";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";

function EventoCadastro() {
  const [msgTipo, setMsgTipo] = useState();
  const [titulo, setTitulo] = useState();
  const [tipo, setTipo] = useState();
  const [descricao, setDescricao] = useState();
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [foto, setFoto] = useState();
  const usuarioEmail = useSelector((state) => state.usuarioEmail);

  const storage = getStorage(firebase);
  const db = firebase.firestore;

  async function PublicarEvento() {
    const fotoRef = ref(storage, `imagens/${foto.name}`);
    await uploadBytes(fotoRef, foto);
    const url = getDownloadURL(fotoRef);
    console.log(url);

    // storage
    //   .ref(`imagens/${foto.name}`)
    //   .put(foto)
    //   .then(() => {
    //     db.collecton("eventos")
    //       .add({
    //         titulo: titulo,
    //         tipo: tipo,
    //         descricao: descricao,
    //         data: data,
    //         hora: hora,
    //         usuario: usuarioEmail,
    //         visualizacoes: 0,
    //         foto: foto.name,
    //         publico: 1,
    //         criacao: new Date(),
    //       })
    //       .then(() => {
    //         setMsgTipo("sucesso");
    //       });
    //   })
    //   .catch((error) => {
    //     setMsgTipo("erro");
    //   });
  }

  return (
    <>
      <NavBar />
      <div className="col-11 mx-auto  ">
        <div className="row">
          <h3 className="text-center font-weight-bold">Criar Evento</h3>
        </div>

        <form>
          <div className="form-group mb-2">
            <label htmlFor="">Título</label>
            <input
              onChange={(e) => setTitulo(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group mb-2">
            <label>Tipo do Evento</label>
            <select
              onChange={(e) => setTipo(e.target.value)}
              className="form-control"
            >
              <option disable="true" value="selected">
                -- Selecione um tipo --
              </option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Evento</option>
            </select>
          </div>

          <div className="form-group mb-2">
            <label htmlFor="">Descrição do Evento</label>
            <textarea
              onChange={(e) => setDescricao(e.target.value)}
              className="form-control"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group row mb-2">
            <div className="col-6">
              <label htmlFor="">Data:</label>
              <input
                onChange={(e) => setData(e.target.value)}
                className="form-control"
                type="Date"
              />
            </div>
            <div className="col-6">
              <label htmlFor="">Hora:</label>
              <input
                onChange={(e) => setHora(e.target.value)}
                className="form-control"
                type="Time"
              />
            </div>
          </div>

          <div className="form-group ">
            <label htmlFor="">Upload da Foto:</label>
            <input
              onChange={(e) => setFoto(e.target.files[0])}
              type="file"
              className="form-control"
            />
          </div>

          <button
            onClick={PublicarEvento}
            className="w-100 mt-2 btn btn-lg btn-evento-cadastro"
            type="button"
          >
            Publicar Evento
          </button>

          <div className="msg-login bg-success d-flex align-items-center justify-content-center rounded-3 col-5 mx-auto text-center mt-2 ">
            {msgTipo === "sucesso" && (
              <span className="">
                <strong>WoW!</strong> Evento publicado!
                <span className="fs-4"> &#128526;</span>
              </span>
            )}

            {msgTipo === "erro" && (
              <span>
                <strong>Ops!</strong> Não foi possível publicar o evento!
                <span className="fs-4"> &#128546;</span>
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default EventoCadastro;
