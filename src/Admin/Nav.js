/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom"; 

const Nav = () => {

    const history = useHistory();

    function hapus() {
        sessionStorage.clear();
        history.push("/login");
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-3 rounded shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="#"
              width={30}
              height={24}
              className="d-inline-block align-text-top"
              alt="logo"
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
            <span className="navbar-toggler-icon" />
          </button>
          <div>
            <div className="collapse navbar-collapse text-right" id="navbarNav">
          <div>
            Dashboard {sessionStorage.getItem("name")}
            <button onClick={hapus} className="btn btn-outline-danger ml-4" type="submit">
              Logout
            </button>
          </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
