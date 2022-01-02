import React from "react";
import "./login.css";

function Login() {
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
          type="email"
          className="form-control my-2"
          id="floatingInput"
          placeholder="name@example.com"
        />

        <input
          type="senha"
          className="form-control my-2"
          id="floatingPassword"
          placeholder="Password"
        />

        <button className="w-100 btn btn-lg btn-login" type="submit">
          Sign in
        </button>

        <div className="msg-login text-white text-center my-5 ">
          <span>
            <strong>WoW!</strong> Você está conectado.
            <span className="fs-4"> &#128526;</span>
          </span>
          <br />
          <span>
            <strong>Ops!</strong> Verifique se a senha e usuário estão corretos.
            <span className="fs-4"> &#128546;</span>
          </span>
        </div>

        <div className="opcoes-login text-center">
          <a href="#" className="mx-2">
            Recuperar senha
          </a>
          <span className="text-white">&#9733;</span>
          <a href="#" className="mx-2">
            Quero cadastrar
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
