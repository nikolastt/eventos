import React, { useState } from "react";
import "firebase/auth";
import "./usuario-novo.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../config/firebase";
import NavBar from "../../components/navbar";
import { Navigate } from "react-router-dom";
function NovoUsuario() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  async function Cadastrar() {
    setMsgTipo(null);
    setLoad(true);

    if (!email && !senha) {
      setLoad(false);
      setMsgTipo("erro");
      setMsg("Você precisa informar o email e senha para fazer o cadastro!");
      return;
    }

    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        setLoad(false);
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOG_IN", usuarioEmail: email });
        setMsgTipo("sucesso");
        // ...
      })
      .catch((error) => {
        setLoad(false);
        setMsgTipo("erro");
        const errorMessage = error.message;
        console.log(error);
        console.log(error.message);
        switch (errorMessage) {
          case "Firebase: Error (auth/invalid-email).":
            setMsg("Email invalido");
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            setMsg("A senha deve conter no mínimo 6 caracteres.");
            break;
          case "Firebase: Error (auth/email-already-in-use).":
            setMsg("Email já cadastrado.");
            break;
          case "Firebase: Error (auth/internal-error).":
            setMsg("A senha deve ser informada.");
            break;
          default:
            setMsg("Não foi possível cadastrar tente novamente mais tarde.");
            break;
        }

        // ..
      });
  }

  return (
    <div>
      <NavBar />
      <div className="cadastro col-12 d-flex p-0">
        {useSelector((state) =>
          state.usuarioLogado > 0 ? <Navigate to="/" /> : null
        )}

        <div className="cadastro-content d-flex w-100 align-items-center justify-content-center ">
          <div className="card card-cadastro w-100 d-flex">
            <form className="mx-auto my-5 h-100 align-items-center w-100 px-3">
              <div className="text-center mb-4">
                <h1 className="h3 mb-3 fw-normal text-white fw-bold">
                  Cadastro
                </h1>
              </div>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control  my-2"
                id="floatingInput"
                placeholder="e-mail"
              />

              <input
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                className="form-control my-2"
                id="floatingPassword"
                placeholder="Senha"
              />

              {load ? (
                <div className="spinner mt-3  text-center">
                  <div className="spinner-grow  text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <button
                  onClick={Cadastrar}
                  className="w-100 btn btn-lg  btn-login"
                  type="button"
                >
                  Cadastrar
                </button>
              )}

              <div className="msg-login bg-success text-white text-center mt-2 ">
                {msgTipo === "sucesso" && (
                  <span>
                    <strong>WoW!</strong> Usuário cadstrado!
                    <span className="fs-4"> &#128526;</span>
                  </span>
                )}
              </div>
              <div className="bg-danger">
                {msgTipo === "erro" && (
                  <span>
                    <strong>Ops!</strong> {msg}
                    <span className="fs-4"> &#128546;</span>
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovoUsuario;
