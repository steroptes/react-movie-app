import React from "react";
import { Form, FormControl, Row, Col } from "react-bootstrap";
import "./MovieSearch.css";

const MovieSearch = ({ setTitleSearch, setRatingSearch }) => {
  return (
    <Row className="search-criters">
      <Col lg={8}>
        <FormControl
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setTitleSearch(e.target.value);
          }}
        />
      </Col>
      <Col lg={4}>
        <Form.Group as={Row} className="search-by-rating" controlId="exampleForm.ControlSelect1">
          <Form.Label>Search By Rating</Form.Label>
          <Col>
            <Form.Control
              inline
              as="select"
              onClick={(e) => {
                setRatingSearch(e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default MovieSearch;
