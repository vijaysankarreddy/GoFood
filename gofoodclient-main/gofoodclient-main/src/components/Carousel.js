import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ objectFit: "contain !important" }}
    >
      <div className="carousel-inner" id="carousel">
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-white bg-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk="
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU="
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
