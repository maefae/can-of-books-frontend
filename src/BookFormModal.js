import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class BookFormModal extends React.Component {
  // Form event handler/helper function
  handleSubmit = (e) => {
    e.preventDefault();
    // parse through the form data
    // object literal, matching our bookSchema on the backend
    this.handleBooksCreate({
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked,
    });
  };

  handleDelete = async (bookToDelete) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER}/books/${bookToDelete._id}`
      );
      console.log("The response.status is:", response.status);
      // filter it out from state
      const filteredBooks = this.state.books.filter((book) => {
        return book._id !== bookToDelete._id;
      });
      this.setState({
        books: filteredBooks,
      });
    } catch (error) {
      console.log("we have an error: ", error.response);
    }
  };

  getBooks = async () => {
    try {
      // make a call to my server/books to get books
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      // bookData.data
      this.setState({
        books: bookData.data,
      });
    } catch (error) {
      console.log("we have an error: ", error.response);
    }
  };

  // React Lifecycle function that will run this block of code as soon as the component is rendered to the DOM tree... net effect: it will call this.getBooks() right on site load.
  componentDidMount() {
    this.getBooks();
  }

  render() {
    // let books = this.state.books.map((book, index) => (
    //   <>
    //     <p key={book._id}>{book.name} is a new book</p>
    //     <button onClick={() => this.handleDelete(book)} key={index}>
    //       {" "}
    //       {/*inline button method*/}
    //       Delete Book?
    //     </button>
    //   </>
    // ));
    return (
      <>
        {/* <header>
          <h1>New Books</h1>
        </header>
        <main>{this.state.books.length > 0 && <>{books}</>}</main>
        <button onClick={this.props.handleBooksCreate}>Add book</button>
        {this.state.showModal && (
          <Container>
            {" "}
            <Form onSubmit={this.handleSubmit}>
              {" "}
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Enter Book Name</Form.Label>
                <Form.Control placeholder="Enter Book Name" />{" "}
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Enter Their Description</Form.Label>
                <Form.Control placeholder="Enter Description" />{" "}
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="status">
                <Form.Check type="checkbox" label="Status" />{" "}
              </Form.Group>{" "}
              <Button variant="primary" type="submit">
                Submit //{" "}
              </Button>{" "}
            </Form>
          </Container>
        )} */}
      </>
    );
  }
}

export default BookFormModal;
