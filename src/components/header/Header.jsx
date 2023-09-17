import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Header.css";

function Header() {
  const searchText = "What do you want to watch?";

  return (
    <Navbar className="bg-transparent mt-3 position-absolute w-100">
      <Container fluid="lg" className="grid-container-nav">
        <Navbar.Brand className="grid-item-1">
          <Link
            to="/"
            className="text-decoration-none d-flex align-items-center"
          >
            <img src="../../assets/tv-box.svg" alt="Tv Box" />
            <span className="fs-4 fw-medium ms-3 text-white">MovieBox</span>
          </Link>
        </Navbar.Brand>
        <Navbar className="w-100 grid-item-2">
          <InputGroup className="w-100">
            <Form.Control
              placeholder={searchText}
              aria-describedby="search-bar"
              className="bg-transparent text-white common-style input-style"
            />
            <InputGroup.Text id="search-bar" className="bg-transparent border-3 common-style">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </InputGroup.Text>
          </InputGroup>
        </Navbar>
        <Navbar className="grid-item-3">
          <Nav className="d-flex align-items-center">
            <Link to="/" className="text-decoration-none text-white me-3 fs-6">
              Sign in
            </Link>
            <img src="/src/assets/menu-bar.svg" alt="Tv Box" />
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;
