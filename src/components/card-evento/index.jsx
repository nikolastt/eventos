import React from "react";
import "./card-evento.css";
function CardEvento({ titulo, descricao, url, visualizacoes }) {
  return (
    <div className="col-md-4 p-2 col-sm-6 col-xs-12 col-lg-3">
      <div className="card w-18rem ">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descricao}</p>

          <div className="row d-flex  align-items-center">
            <div className="col-6">
              <button href="#" className="btn btn-primary">
                Saiba mais
              </button>
            </div>

            <div className=" card-rodape col-6 text-end">
              <i className=" text-right fas fa-eye"></i>
              <span>2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEvento;
