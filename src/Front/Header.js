/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import heroimage from "../images/heroimage.JPG";

const Header = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container hero">
          <div className="row">
            <div className="col-lg-6 text-lg-start text-center">
              <p className="hero-text pt-4 pt-md-1">
                Satuan Pelaporan Darurat Cililin
              </p>
              <h1>Awali Hidupmu Dengan</h1>
              <h1>
                <span>Rasa Peduli</span>
              </h1>
              <p className="my-4">
                Berikan pertolongan pertama Anda saat melihat kecelakaan lalu
                lintas.
                <br /> Ayo daftarkan dirimu menjadi bagian dari SAPDACIL.
              </p>
              <div className="button-hero pt-">
                <a
                  className="btn btn-daftar px-4 py-3 rounded-pill m-2"
                  href="/register"
                  role="button"
                >
                  Daftar
                </a>
                <a
                  className="btn btn-login px-4 py-3 rounded-pill m-2"
                  href="/login"
                  role="button"
                >
                  Login
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-1">
              <img
                className="d-block mx-auto"
                src={heroimage}
                width="500px"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End*/}
    </div>
  );
};

export default Header;
