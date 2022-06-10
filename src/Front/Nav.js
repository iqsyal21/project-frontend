/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logosapdacil from "../logosapdacil.png";

const Navigation = () => {
  return (
    <div>
      {/* Navigasi */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logosapdacil}
              alt="logo"
              width={30}
              height={22}
              className="d-inline-block align-text-top"
            />
            SAPDACIL
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#tentang-kami">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#tim-kami">
                  Tim Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SAPDACIL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tentang-kami">Tentang Kami</Nav.Link>
              <Nav.Link href="#tim-kami">Tim Kami</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      {/* Navigasi end */}
    </div>
  );
};

export default Navigation;
