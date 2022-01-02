import React, { useState } from "react";
import "./login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  function logar() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        setMsgTipo("sucesso");
        // // Signed in
        // const user = userCredential.user;
        // // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setMsgTipo("erro");
      });
  }

  return (
    <div className="login-content d-flex align-items-center ">
      <form className="mx-auto">
        <div className="text-center mb-4">
          {/* <img
            className="mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          /> */}
          <h1 className="h3 mb-3 fw-normal text-white fw-bold">Login</h1>
        </div>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control my-2"
          id="floatingInput"
          placeholder="name@example.com"
        />

        <input
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          className="form-control my-2"
          id="floatingPassword"
          placeholder="Password"
        />

        <button
          onClick={logar}
          className="w-100 btn btn-lg btn-login"
          type="button"
        >
          Logar
        </button>

        <div className="msg-login text-white text-center my-5 ">
          {msgTipo === "sucesso" && (
            <span>
              <strong>WoW!</strong> Você está conectado.
              <span className="fs-4"> &#128526;</span>
            </span>
          )}

          {msgTipo === "erro" && (
            <span>
              <strong>Ops!</strong> Verifique se a senha e usuário estão
              corretos.
              <span className="fs-4"> &#128546;</span>
            </span>
          )}
        </div>

        <div className="opcoes-login text-center">
          <a href="/" className="mx-2">
            Recuperar senha
          </a>
          <span className="text-white">&#9733;</span>
          <a href="/" className="mx-2">
            Quero cadastrar
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
