import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BestBooks from "./BestBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <BestBooks />
          <Routes>
            <Route exact path="/" element={<BestBooks />}></Route>
            <Route path="/About" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.setShowModalFalse}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <img
            src={this.props.selectedBeast.image_url}
            alt={this.props.title}
            className="mx-3 my-auto"
          />
          <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.setShowModalFalse}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
