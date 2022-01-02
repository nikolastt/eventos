import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <span className="navbar-title text-white  " href="#">
          Eventos
        </span>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars text-white"></i>{" "}
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link active" aria-current="page" to="/login">
              Login
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/novousuario"
            >
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
