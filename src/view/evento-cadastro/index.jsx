import firebase from "../../config/firebase";
import React, { useState } from "react";
import NavBar from "../../components/navbar";
import "./evento-cadastro.css";
import { useSelector } from "react-redux";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
  const db = getFirestore(firebase);
  const [carregando, setCarregando] = useState(false);

  function PublicarEvento() {
    setCarregando(true);
    const storageRef = ref(storage, `imagens/${foto.name || "Sem imagem"}`);
    const uploadTask = uploadBytesResumable(storageRef, foto);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        setCarregando(false);
        setMsgTipo("erro");
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(db, "eventos"), {
            titulo,
            tipo,
            descricao,
            data,
            hora,
            foto: foto.name,
            usuarioEmail: usuarioEmail,
            visualizacoes: 0,
            url: downloadURL,
          }).catch((error) => {
            setMsgTipo("error");
            setCarregando(false);
          });
          setCarregando(false);
          setMsgTipo("sucesso");
        });
      }
    );
  }

  return (
    <>
      <NavBar />

      <div className="evento-cadastro col-12 d-flex">
        <div class="card card-evento-cadastro col-10 ">
          <form className="mx-auto my-5 h-100 align-items-center px-3 w-100">
            <div className="text-center mb-4">
              <h1 className="h3 mb-3 fw-normal text-white fw-bold">
                Cadastrar Evento
              </h1>
            </div>
            <div className="row">
              <div className="form-group col-md-6 col-sm-12 text-white ">
                <label htmlFor="">Título</label>
                <input
                  onChange={(e) => setTitulo(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Digite o título do Evento"
                />
              </div>

              <div className="form-group col-md-6 col-sm-12 text-white">
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
                  <option>Aniversário</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="form-group text-white  col-md-6 col-sm-12">
                <label htmlFor="">Descrição do Evento</label>
                <textarea
                  onChange={(e) => setDescricao(e.target.value)}
                  className="form-control  "
                  rows="4"
                ></textarea>
              </div>

              <div className="form-group  text-white col-sm-12 m-0 col-md-6">
                <div className="input-data col-12 p-0 ">
                  <label htmlFor="">Data:</label>
                  <input
                    onChange={(e) => setData(e.target.value)}
                    className="form-control hora-fixed-2 col-md-12 col-sm-12   calendario-eventoo-cadastro"
                    type="Date"
                  />
                </div>
                <div className=" col-12 p-0 input-hora">
                  <label htmlFor="">Hora:</label>
                  <input
                    onChange={(e) => setHora(e.target.value)}
                    className="form-control hora-fixed-1 col-md-12 col-sm-12 relogio-evento-cadastro"
                    type="Time"
                  />
                </div>
              </div>
            </div>

            <div className="row  col-12 p-0 m-0 mobile-top">
              <div className="form-group  col-12 p-0 m-0 ">
                <label
                  for="formFileSm"
                  class="form-label margin-sm text-center text-white"
                >
                  Upload da imagem.
                </label>
                <div className="row m-0 p-0 col-12 d-flex justify-content-center">
                  <label
                    for="formFileSm"
                    class="form-label d-flex justify-content-center align-items-center  label-css text-white"
                  >
                    <i class="fas fa-images fa-3x fa-imagens"></i>
                  </label>
                </div>

                <div className="row text-center d-flex">
                  <input
                    onChange={(e) => setFoto(e.target.files[0])}
                    class="form-control  mr-5 col-12 form-control-sm custom-file"
                    id="formFileSm"
                    type="file"
                    accept="image/*"
                  />
                </div>

                <div className="row">
                  {carregando ? (
                    <div className="spinner mt-3  text-center">
                      <div className="spinner-grow  text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={PublicarEvento}
                      className="w-100 mt-2 btn btn-lg btn-evento-cadastro"
                      type="button"
                    >
                      Cadastrar Evento
                    </button>
                  )}
                </div>
                <div className="msg-login bg-success d-flex align-items-center justify-content-center rounded-3 col-lg-5 col-md-7 col-xs-10 mx-auto text-center mt-2 ">
                  {msgTipo === "sucesso" && (
                    <span className="">
                      <strong>WoW!</strong> Evento publicado!
                      <span className="fs-4"> &#128526;</span>
                    </span>
                  )}
                </div>
                <div className="msg-login bg-danger d-flex align-items-center justify-content-center rounded-3 col-5 mx-auto text-center mt-2">
                  {msgTipo === "erro" && (
                    <span>
                      <strong>Ops!</strong> Não foi possível publicar o evento!
                      <span className="fs-4"> &#128546;</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EventoCadastro;
