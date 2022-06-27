import React from 'react';
import userdash from '../images/userdash.JPG';

const Header = () => {
  return (
    <div className="container">
      <section id="tentang-kami" className="tentang-kami">
        <div className="header-container">
          <div className="header-thumbnail">
          <img
              src={userdash}
              alt="Gambar orang dan mobile"
            />
          </div>
            <div className="note-dashboard">
              <p className="pt-4 pt-lg-0">
                Selamat datang di Dashboard User. Semoga harimu menyenangkan.
                Jika anda melihat kecelakaan, silahkan lapor pada laman di bawah
                ini ya. Pastikan data yang anda masukan sesuai karena nanti
                pihak rumah sakit akan menghubungi anda untuk memberikan
                informasi lebih lanjut terkait laporan yang anda kirimkan
              </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
