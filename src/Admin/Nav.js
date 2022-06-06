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
            <button onClick={hapus} className="btn btn-outline-danger" type="submit">
              Logout
            </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
