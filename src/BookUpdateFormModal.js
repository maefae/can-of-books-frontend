import React from "react";
import {Button, Modal, Form } from "react-bootstrap";

class BookUpdateFormModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // parse through the form data
    // object literal, matching our bookSchema on the backend
    this.props.updateBook({
      title: e.target.title.value || this.props.currentBook.title,
      description: e.target.description.value || this.props.currentBook.description,
      status: e.target.status.value || this.this.props.currentBook.status,

    });
    this.props.onHide();
    // this.props.updateBook(this.handleUpdate);
  };

  handleUpdate = (e) => {
    e.preventDefault();

    let bookToUpdate = {
      title: e.target.title.value || this.state.book.title,
      description: e.target.description.value || this.state.book.description,
      status: e.target.status.value || this.state.book.status,

      // pass in _id and __v of book
      _id: this.state.book._id,

      // two underscores
      __v: this.state.book.__v,
    };

    // log to see the book we are to update
    console.log("bookToUpdate: ", bookToUpdate);
    this.props.updateBook(bookToUpdate);
  };


  render() {
    return (
      <>
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
            <Form onSubmit={this.handleSubmit}>
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}


export default BookUpdateFormModal;
