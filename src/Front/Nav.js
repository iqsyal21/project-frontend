/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logosapdacil from "../logosapdacil.png";

const Navigation = () => {
  return (
    <div>
      {/* Navigasi */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logosapdacil}
              alt="logo sapdacil"
              width={28}
              height={24}
              className="d-inline-block align-text-top"
            />
            SAPDACIL
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
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
              <li className="nav-item me-3">
                <a className="nav-link" href="/bantuan">
                  Bantuan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navigasi end */}
    </div>
  );
};

export default Navigation;
