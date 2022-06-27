import React from "react";
import emailjs from "emailjs-com";

const Bantuan = () => {
  function kirimEmail(data) {
    emailjs
      .sendForm(
        "service_cv11yxk",
        "template_8fgrtmb",
        data.target,
        "Xu0fFXFmpMHPMaNuS"
      )
      .then(() => alert("data berhasil dikirim"))
      .catch(() => alert("data berhasil dikirim"));
  }

  return (
    <div className="container">
      <div className="container-bantuan">
        <div className="perhatian-bantuan">
          <h2>Perhatian Dalam Pengisian Form</h2>
          <ul>
            <li>
              pastikan email yang dimasukan dapat dihubungi. hal tersebut karena
              nantinya pihak pengelola sistem akan mengkonfirmasi lewat email.
            </li>
            <li>masukan keterangan secukupnya saja.</li>
            <li>
              bila masalah yang ditemukan kompleks maka sebaiknya menghubungi
              nomor costumer service, untuk nomor CS diberikan lewat email
              lanjutan.
            </li>
          </ul>
        </div>
        <div className="form-bantuan">
          <h2>Form Bantuan</h2>
          <form className="row" onSubmit={kirimEmail}>
            <label>Nama</label>
            <input type="text" name="nama" className="form-control" />

            <label>Email</label>
            <input type="email" name="email" className="form-control" />

            <label>Keterangan</label>
            <textarea
              name="keterangan"
              cols="30"
              rows="4"
              className="form-control"
            />
            <input
              type="submit"
              value="kirim"
              className="form-control btn btn-primary mt-2"
            />
          </form>
        </div>
      </div>
      <div className="mt-4 text-center">
        <a href="/home">kembali ke menu utama</a>
      </div>
    </div>
  );
};

export default Bantuan;
