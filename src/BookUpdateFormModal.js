import React from "react";
import { Modal, Form } from "react-bootstrap";

class BookUpdateFormModal extends React.Component {
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
    this.props.updateBook(updatedBook);
  };

  render() {
    console.log(this.props);
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        keyboard="true"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title className="w-100">Update a Book!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handleUpdate}>
            <Form.Label>
              Enter a Book Title!
              <Form.Control
                type="text"
                name="title"
                placeholder="(Really Cool Book)"
              />
            </Form.Label>
            <Form.Label>
              Give The Book a Description!
              <Form.Control
                type="text"
                name="description"
                placeholder="(Description)"
              />
            </Form.Label>
            <Form.Label>
              Status!
              <Form.Control type="text" name="status" placeholder="(Status)" />
            </Form.Label>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default BookUpdateFormModal;
