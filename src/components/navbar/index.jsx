import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  return (
    <nav class="navbar navbar-expand-lg ">
      <Link className="navbar-title col-2 text-center text-white  " to="/">
        <i className="fas icon-calendario p-2 fa-2x fa-calendar-check"></i>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#conteudoNavbarSuportado"
        aria-controls="conteudoNavbarSuportado"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <i className="fas fa-bars mx-4 text-white"></i>
      </button>

      <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
        <ul class="navbar-nav w-100">
          <li class="nav-item active ">
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
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/usuario-novo">
                    Cadastrar
                  </Link>
                </li>
              </div>
            </>
          ) : (
            <>
              <li class="nav-item">
                <Link class="nav-link" to="/evento-cadastro">
                  Criar evento
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/meus-evento">
                  Meus Eventos
                </Link>
              </li>

              <li class="nav-item navbar-collapse justify-content-end">
                <Link class="nav-link mr-5" to="/">
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
