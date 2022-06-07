/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router-dom";

const Nav = () => {

  const history = useHistory();

  function login() {
    history.push("/login");
  }

  function register() {
    history.push("/register");
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div>
            <button onClick={login} className="btn btn-primary mr-1" type="submit">
              Login
            </button>
            <button onClick={register} className="btn btn-outline-primary ml-1" type="submit">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
