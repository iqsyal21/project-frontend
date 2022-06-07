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
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div>
            Dashboard {sessionStorage.getItem("name")}
            <button onClick={hapus} className="btn btn-outline-danger ml-4" type="submit">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
