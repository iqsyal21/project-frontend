import React from 'react';
import admindash from '../images/admindash.JPG';

const Header = () => {
  return (
    <div className="container">
      <section id="tentang-kami" className="tentang-kami">
        <div className="header-container">
          <div className="header-thumbnail">
            <img
              src={admindash}
              alt="Gambar orang dan mobile"
            />
          </div>
            <div className="note-dashboard">
              <p className="pt-4 pt-lg-0">
                Selamat datang di Dashboard Admin. Semoga harimu menyenangkan.
                Jangan lupa mengerjakan tugas laporan user yang harus kamu
                kerjakan, demi kesejahteraan banyak orang. Semakin cepat tugas laporan yang ditangani 
                semakin cepat pula penanganan tindak lanjut, semakin banyak nyawa terselamatkan.
              </p>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Header;
