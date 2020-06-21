import React from 'react'
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css'
const MovieList = (props) => {
    return (
      <div className="movie-list">
        {props.movieList
          .filter(el => 
            el.rating >= props.ratingSearch && 
            el.title.toLowerCase().includes(props.titleSearch.toLowerCase().trim()))
          .map((el, i) => (
          <MovieCard key={i} movieCard={el} />
        ))}

      </div>
    );
}

export default MovieList
