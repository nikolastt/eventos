import React from "react";
import "./card-evento.css";
import { Link } from "react-router-dom";
function CardEvento({ id, titulo, descricao, url, visualizacoes }) {
  return (
    <div className=" container d-flex justify-content-center  col-md-4 p-3 col-sm-6 col-xs-12 col-lg-3 ">
      <div className="card shadow-lg">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body ">
          <div className="card-titulo ">
            <h5 className="card-title ">{titulo}</h5>
          </div>
          <div className="card-descricao ">
            <p>{descricao}</p>
          </div>
        </div>
        <div className="card-footer">
          <Link
            to={"/eventodetalhe/" + id}
            className="btn btn-card-eventos col-9 btn-primary"
          >
            Mais detalhes...
          </Link>
          <div className="col-3 text-end icon">
            <i className="fas fa-eye"></i> <span>{visualizacoes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEvento;
