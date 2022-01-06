import React from "react";
import "./card-evento.css";
import { Link } from "react-router-dom";
function CardEvento({ titulo, descricao, url, visualizacoes }) {
  return (
    <div className="  col-md-4 p-2 col-sm-6 col-xs-12 col-lg-3 ">
      <div className="card">
        <div className="card-imagem">
          <img src={url} className="card-img p-2" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descricao}</p>
        </div>
        <div className="card-footer align-items-center d-flex ">
          <div className="button  col-9">
            {/* <button clasName="btn btn-lg btn-card-eventos w-100" type="button">
              <Link to="/">Saiba mais</Link>
            </button> */}

            <button
              className="w-100  btn btn-lg btn-card-eventos"
              type="button"
            >
              Saiba mais...
            </button>
          </div>
          <div className="icon col-3 text-end">
            <i className="far  fa-eye"></i> <span>{visualizacoes}</span>
          </div>
        </div>
      </div>

      {/* <div className="card ">
        <img src={url} className="img-cartao-img " alt="..." />

        <div className="card-body d-flex">
          <div className="cardTitle">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descricao}</p>
          </div>

          <div className="row d-flex  align-items-center">
            <div className=" col-md-6 col-xs-10">
              <button href="#" className="btn btn-card-eventos btn-primary">
                Saiba mais
              </button>
            </div>

            <div className=" card-rodape col-md-l col-xs-2 text-end">
              <i className=" text-right fas fa-eye"></i>
              <span> {visualizacoes}</span>
            </div>
          </div>
        </div>
  </div>*/}
    </div>
  );
}

export default CardEvento;
