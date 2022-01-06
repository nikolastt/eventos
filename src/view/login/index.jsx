import React, { useState } from "react";
import "./login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../config/firebase";
import "firebase/auth";
import { Link, Navigate } from "react-router-dom";

import NavBar from "../../components/navbar";

import { useSelector, useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  function logar() {
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        dispatch({ type: "LOG_IN", usuarioEmail: email });
        setMsgTipo("sucesso");
        // Signed in
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert(error.message);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setMsgTipo("erro");
      });
  }

  return (
    <>
      <NavBar />
      <div className="login col-12 d-flex p-0">
        {useSelector((state) => state.usuarioLogado) > 0 ? (
          <Navigate to="/" />
        ) : null}

        <div className="login-content d-flex w-100 align-items-center justify-content-center ">
          <div class="card w-100 d-flex">
            <form className="mx-auto my-5 h-100 align-items-center px-3 w-100">
              <div className="text-center mb-4">
                <h1 className="h3 mb-3 fw-normal text-white fw-bold">Login</h1>
              </div>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control my-2"
                id="floatingInput"
                placeholder="email@exemplo.com"
              />

              <input
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                className="form-control my-2"
                id="floatingPassword"
                placeholder="Senha"
              />

              <button
                onClick={logar}
                className="w-100 btn btn-lg  btn-login "
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
                <Link to="/recuperar-senha" className="mx-2">
                  Recuperar senha
                </Link>
                <span className="text-white">&#9733;</span>
                <Link to="/novousuario" className="mx-2">
                  Quero cadastrar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
