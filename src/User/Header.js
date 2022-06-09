import React from "react";
import userdash from "../images/userdash.JPG";

const Header = () => {
  return (
    <div>
      <section id="tentang-kami" className="tentang-kami">
        <div className="container">
          <div className="row">
            <img
              className="d-block mx-auto py-2 mt--2"
              src={userdash}
              alt="Gambar orang dan mobile"
              height="320px"
              width="280"
            />
            <div className="col-lg-5 mx-auto mt-4">
              <p className="pt-4 pt-lg-0">
                Selamat datang di Dashboard User. Semoga harimu menyenangkan.
                Jika anda melihat kecelakaan, silahkan lapor pada laman di bawah
                ini ya. Pastikan data yang anda masukan sesuai karena nanti
                pihak rumah sakit akan menghubungi anda untuk memberikan
                informasi lebih lanjut terkait laporan yang anda kirimkan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
