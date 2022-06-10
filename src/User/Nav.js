/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logosapdacil from "../logosapdacil.png";
import { useHistory } from 'react-router-dom';

const Nav = () => {
  const history = useHistory();

  function hapus() {
    sessionStorage.clear();
    history.push('/login');
  }

  return (
    <div>
<<<<<<< HEAD
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logosapdacil}
              alt="logo"
=======
      <nav className="navbar navbar-expand-md navbar-light p-3 rounded shadow-sm">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img
              src="#"
              alt=""
>>>>>>> fa416733bffc602d7a6640e7e5e0c3e113ad3d54
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
            <ul class="navbar-nav ms-auto d-flex flex-row-lg justify-content-center align-items-center">
              <li className="nav-item me-3">
                Dashboard {sessionStorage.getItem('name')}
              </li>
              <li className="nav-item me-3">
                <button
                  onClick={hapus}
                  className="btn btn-outline-danger ml-4"
                  type="submit"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
