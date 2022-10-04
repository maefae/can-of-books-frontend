import React from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBooks = async () => {
    try {
      // make a call to my server/cats to get cats
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      // catData.data
      this.setState({
        books: bookData.data,
      });
    } catch (error) {
      console.log("we have an error: ", error.response);
    }
  };

  // React Lifecycle function that will run this block of code as soon as the component is rendered to the DOM tree... net effect: it will call this.getCats() right on site load.
  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Container>
            <Carousel className="h-50 rounded-bottom mb-5 bg-dark rounded">
              {this.state.books.map((book) => {
                return (
                  <Carousel.Item>
                    <>
                      <div className="pb-5 mb-5">
                        <img
                          className="d-block w-50 mx-auto"
                          src="https://www.nirah.com/images/item-placeholder.svg?id=498f4e96baf0bbbc9351"
                          alt={book.title}
                        />
                      </div>
                    </>
                    <Carousel.Caption
                      id="carouselText"
                      className="bg-dark mx-auto bg-opacity-75 rounded-bottom"
                    >
                      <>
                        <div>
                          <h3>{book.title}</h3>
                          <p>{book.description}</p>
                          <p>{book.status}</p>
                        </div>
                      </>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Container>
        ) : (
          <p>Book collection is empty.</p>
        )}
      </>
    );
  }
}

export default BestBooks;
