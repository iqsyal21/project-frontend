import React from "react";
import admindash from "../images/admindash.JPG";

const Header = () => {
  return (
    <div>
      <section id="tentang-kami" className="tentang-kami">
        <div className="container">
          <div className="row">
            <img
              className="d-block mx-auto py-2 mt--2"
              src={admindash}
              alt="Gambar orang dan mobile"
              height="320px"
              width="280"
            />
            <div className="col-lg-5 mx-auto mt-4">
              <p className="pt-4 pt-lg-0">
                Selamat datang di Dashboard Admin. Semoga harimu menyenangkan.
                Jangan lupa mengerjakan tugas laporan user yang harus kamu kerjakan, demi kesejahteraan banyak orang.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
