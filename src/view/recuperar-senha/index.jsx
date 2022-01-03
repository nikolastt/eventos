import "./recuperacao-senha.css";
import React, { useState } from "react";
import NavBar from "../../components/navbar";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import firebase from "../../config/firebase";

function RecuperarSenha() {
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  function EnviarEmail() {
    const auth = getAuth(firebase);
    sendPasswordResetEmail(auth, email)
      .then((resultado) => {
        setMsg(
          "Enviamos um link no seu email para você redefinir a sua senha!"
        );
      })
      .catch((error) => {
        setMsg("Verifique se o emial está correto!");
      });
  }

  return (
    <>
      <NavBar />
      <div className="login-content d-flex align-items-center ">
        <form className="mx-auto w-35">
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 fw-normal text-white fw-bold">
              Recuperar senha
            </h1>
          </div>

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control my-2"
            id="floatingInput"
            placeholder="email"
          />

          <button
            onClick={EnviarEmail}
            className="w-100 btn btn-lg btn-login"
            type="button"
          >
            Logar
          </button>

          <div className="msg-login text-white text-center my-5 ">
            <span>{msg}</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default RecuperarSenha;
