import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <span className="navbar-title text-white  " href="#">
          Eventos
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>{" "}
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>

            {useSelector((state) => state.usuarioLogado) === 0 ? (
              <>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/novousuario"
                >
                  Cadastrar
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link active" aria-current="page" to="/">
                  Criar evento
                </Link>
                <Link className="nav-link active" aria-current="page" to="/">
                  Meus eventos
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => dispatch({ type: "LOG_OUT" })}
                >
                  Sair
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
