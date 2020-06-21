import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Col, Container} from "react-bootstrap"
import "./App.css";
import { moviesData } from "./Data/MovieData";
import MovieList from "./Components/MovieList/MovieList";
import MovieAdd from "./Components/MovieAdd/MovieAdd";
import MovieSearch from "./Components/MovieSearch/MovieSearch";

function App() {
  const [movieList, setMovieList] = useState(moviesData);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addingMovie = (e) => {
    e.preventDefault();
    let newMovie = {
      id: Math.random(),
      title: title,
      rating: rating,
      image: image,
      description: description,
      date: date,
    };
    return setMovieList([...moviesData, newMovie]);
  };

  return (
    <Container fluid className="App">
      <Navbar className="navbar" bg="light" expand="lg">
        <Col lg={{ span: 8, offset: 2 }}>
          <MovieSearch
            setTitleSearch={setTitleSearch}
            setRatingSearch={setRatingSearch}
          />
        </Col>
        <Col className="add-button-container" lg={2}>
          <MovieAdd
            className="add-button"
            addingMovie={addingMovie}
            setId={setId}
            setTitle={setTitle}
            setDescription={setDescription}
            setDate={setDate}
            setRating={setRating}
            setImage={setImage}
          />
        </Col>
      </Navbar>
      <MovieList
        movieList={movieList}
        titleSearch={titleSearch}
        ratingSearch={ratingSearch}
      />
    </Container>
  );
}
export default App;
