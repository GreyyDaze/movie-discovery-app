import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Error.css"

function Error({ error }) {
  return (
    <>
      <section className="error d-flex justify-content-center">
        <div className="middle text-center mt-5 align-self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            fill="red"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <h2 className="mt-5">{error}</h2>
          <Button variant="danger" className="mt-5">
            <Link to="/" className="text-decoration-none text-white">
              Back Home
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export default Error;
