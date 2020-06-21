import React from 'react'
import './MovieCard.css'
import { Row } from "react-bootstrap";
const MovieCard = ({movieCard:{title,desc,date,rating,image}}) => {
  return (
    <div>
      <div class="card align-content-end">
        <img src={image} alt="movie affiche"></img>
        <div class="descriptions align-content-end">
          <Row className="mb-auto rating">
            <h2>{Number(rating)}/5</h2>
          </Row>
          <Row className="mt-5">
            <h1 className="movie-title mx-auto">{title}</h1>
          </Row>
          <Row className="mt-auto mb-auto">
            <p>{desc}</p>
          </Row>
          <Row className="card-footer mt-auto mb-0">
            <button>
              <i class="fab fa-youtube"></i>
              Play trailer on YouTube
            </button>
            <h5>{date}</h5>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MovieCard
