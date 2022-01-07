import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <Link className="navbar-title col-2 text-center text-white  " to="/">
        <i className="fas icon-calendario p-2 fa-2x fa-calendar-check"></i>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#conteudoNavbarSuportado"
        aria-controls="conteudoNavbarSuportado"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <i className="fas fa-bars mx-4 text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
        <ul className="navbar-nav w-100">
          <li className="nav-item active ">
            <Link
              className="nav-link active col-2  "
              aria-current="page"
              to="/"
            >
              <i className="fas fa-home"></i>
            </Link>
          </li>
          {useSelector((state) => state.usuarioLogado) === 0 ? (
            <>
              <div className="sigIn navbar-collapse col-11  justify-content-end ">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/novousuario">
                    Cadastrar
                  </Link>
                </li>
              </div>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/evento-cadastro">
                  Criar evento
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/meus-eventos">
                  Meus Eventos
                </Link>
              </li>

              <li className="nav-item navbar-collapse justify-content-end">
                <Link className="nav-link mr-5" to="/">
                  Sair
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
