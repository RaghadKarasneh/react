import React from 'react';
import SingleMovie from './Components/SingleMovie/SingleMovie';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Movie = ({movie}) => {
  function handleMovieClick() {
    dispatch({ type: "MOVIE_CLICKED", payload: props.movie });
    navigate(`/single-movie`, { myMovie: props.movie });
  }
    return (
    
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+ movie.backdrop_path} />
        <Card.Body>
          <Card.Title>{movie.original_title}</Card.Title>
          {/* <Card.Text>
          {movie.overview}
          </Card.Text> */}
          <p>Rate:{movie.vote_average}</p>
          <Button variant="primary" onClick={handleMovieClick}>Read More</Button>
        </Card.Body>
      </Card>
          );
  };
  export default Movie;