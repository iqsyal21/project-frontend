/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logosapdacil from "../logosapdacil.png";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();

  function hapus() {
    sessionStorage.clear();
    history.push("/login");
  }

  return (
    <div>
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
            onClick={hapus}
            className="btn btn-outline-danger ml-4"
            type="submit"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
