import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import "./MovieAdd.css";


function MovieAdd(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handle validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation(); 
      alert("Can't add the film! You must type all the information!");
    }else{
      setValidated(true);
      props.addingMovie(e);
      alert("Film added sucessfully");
      handleClose()
    }
    
  };

  return (
    <>
      <Button className="add-button" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-container"
      >
        <Modal.Header closeButton>
          <Modal.Title>New Movie to Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the movie title here"
                onChange={(e) => props.setTitle(e.target.value)}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02">
              <Form.Label>Affiche</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the link for the movie affiche here"
                onChange={(e) => props.setImage(e.target.value)}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom03">
              <Form.Label>Synopsis</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the synopsis for the new movie  here"
                onChange={(e) => props.setDescription(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please tell us about th film synopsis
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom04">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as="select"
                custom
                onChange={(e) => props.setRating(e.target.value)}
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please rate the film
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom05">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the date of the new movie  here"
                onChange={(e) => props.setDate(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid date.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Validate
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieAdd
