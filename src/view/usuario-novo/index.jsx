import React, { useState } from "react";
import "firebase/auth";
import "./usuario-novo.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import firebase from "../../config/firebase";

function NovoUsuario() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();

  async function Cadastrar() {
    setMsgTipo(null);

    if (!email && !senha) {
      setMsgTipo("erro");
      setMsg("Você precisa informar o email e senha para fazer o cadastro!");
      return;
    }

    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setMsgTipo("sucesso");
        // ...
      })
      .catch((error) => {
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
    <div className="login-content d-flex align-items-center ">
      <form className="mx-auto w-50">
        <div className="text-center mb-4">
          {/* <img
        className="mb-4"
        src="/docs/5.1/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      /> */}
          <h1 className="h3 mb-3 fw-normal text-white fw-bold">Cadastro</h1>
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

        <button
          onClick={Cadastrar}
          className="w-100 mt-3 btn btn-lg btn-login"
          type="button"
        >
          Cadastrar
        </button>

        <div className="msg-login text-white text-center mt-2 ">
          {msgTipo === "sucesso" && (
            <span>
              <strong>WoW!</strong> Usuário cadstrado!
              <span className="fs-4"> &#128526;</span>
            </span>
          )}

          {msgTipo === "erro" && (
            <span>
              <strong>Ops!</strong> {msg}
              <span className="fs-4"> &#128546;</span>
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default NovoUsuario;
