import React from 'react';
const Movie = ({movie}) => {
    return (
      <div>
        <h3>{movie.original_title}</h3>
        <img src={"https://image.tmdb.org/t/p/w500"+ movie.backdrop_path} alt="" />
        <p>{movie.overview}</p>
        <p>Rate:{movie.vote_average}</p>
      </div>
    );
  };
  export default Movie;