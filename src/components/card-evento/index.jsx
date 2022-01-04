import React from "react";
import "./card-evento.css";
function CardEvento() {
  return (
    <div className="col-md-4 p-2 col-sm-6 col-xs-12 col-lg-3">
      <div className="card w-18rem ">
        <img
          src="https://via.placeholder.com/100x50"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also. is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also
          </p>

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
