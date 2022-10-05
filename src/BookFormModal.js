import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

class BookFormModal extends React.Component {
  // Form event handler/helper function
  handleSubmit = (e) => {
    e.preventDefault();
    // parse through the form data
    // object literal, matching our bookSchema on the backend
    this.props.handleBooksCreate({
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked,
    });
    this.props.hideModal();
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.hideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title> Create New Book</Modal.Title>
          </Modal.Header>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Enter Book Name</Form.Label>
                <Form.Control placeholder="Enter Book Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Enter Their Description</Form.Label>
                <Form.Control placeholder="Enter Description" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Check type="checkbox" label="Status" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
