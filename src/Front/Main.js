/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import tentangkamiimage from "../images/tentangkamiimage.JPG";
import vicky from "../images/vicky.JPG";
import iqsyal from "../images/iqsyal.JPG";
import kennie from "../images/kennie.JPG";
import rendra from "../images/rendra.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faMobileScreenButton, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <div>
      {/* tentang kami */}
      <section id="tentang-kami" className="tentang-kami" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1300">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="pb-4 pb-lg-5">Tentang Kami</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-5" data-aos="fade-right" data-aos-duration="1300">
              <img
                className="d-block mx-auto py-2"
                src={tentangkamiimage}
                alt="Gambar orang dan mobile"
                height="320px"
              />
            </div>
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <p className="pt-4 pt-lg-0">
                SAPDACIL (Satuan Pelaporan Darurat Cililin) adalah sebuah
                website yang dibangun untuk mempermudah masyarakat dalam
                melakukan panggilan darurat khususnya saat kecelakaan lalu
                lintas. Dengan website ini, masyarakat dapat memanggil ambulans
                dengan cepat dan mudah. Hasil yang diharapkan dengan penggunaan
                website ini selain waktu datangnya ambulans lebih cepat,
                penanganan yang dilakukan oleh pihak rumah sakit bisa lebih
                tepat sehingga pasien atau korban dapat menerima pertolongan
                dengan cepat dan selamat.
              </p>
              <div className="button-daftar-sekarang pt-1">
                <a
                  className="btn btn-daftar-sekarang px-4 py-3 rounded-pill shadow-lg"
                  href="/register"
                  role="button"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tentang kami end*/}

      {/* Kenapa harus lapor */}
      <section className="reason py-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="400" data-aos-duration="1300">
        <div className="container text-center">
          <div className="row mb-2">
            <div className="col">
              <h2 className="pb-4">Kenapa Harus Lapor di SAPDACIL?</h2>
              <p className="reason-text m-auto">
                Dengan melapor pada website ini masyarakat dapat mempercepat
                proses panggilan darurat dan mendapatkan bantuan dari pihak
                rumah sakit.
              </p>
            </div>
          </div>
          <div className="row pt-4 justify-content-center rounded">
            <div
              className="kelebihan col-md-3 pt-3 m-3 border shadow me-4"
              style={{ width: 300 }}
              data-aos="flip-down" data-aos-duration="1300"  data-aos-offset="300"
            >
              <i className="fas fa-mobile-alt fa-4x py-2" />
              <FontAwesomeIcon icon={faMobileScreenButton} className="py-2 fa-4x"/>
              <h5 className="my-3">Mudah Diakses</h5>
              <p>
                Masyarakat diberikan kemudahan akses dan bebas dari kerepotan
                dalam kondisi panik.
              </p>
            </div>
            <div
              className="kelebihan col-md-3 pt-3 m-3 border shadow me-4"
              style={{ width: 300 }}
              data-aos="flip-down" data-aos-duration="1300" data-aos-offset="300"
            >
              <FontAwesomeIcon icon={faUserMd} className="py-2 fa-4x"/>
              <h5 className="my-3">Penanganan Lebih Cepat</h5>
              <p>
                Respon dari para pemberi bantuan menjadi lebih cepat, efektif,
                dan terpantau.
              </p>
            </div>
            <div
              className="kelebihan col-md-3 pt-3 m-3 border shadow me-4"
              style={{ width: 300 }}
              data-aos="flip-down" data-aos-duration="1300" data-aos-offset="300"
            >
              <FontAwesomeIcon icon={faMapMarkedAlt} className="py-2 fa-4x"/>
              <h5 className="my-3">Lebih Terjamin</h5>
              <p>Kedatangan ambulans lebih pasti dan terjamin.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Kenapa harus lapor end */}

      {/* Peduli bersama */}
      <section className="section text-center pt-5 pb-5" data-aos="fade-up" data-aos-duration="1300">
        <h5 className="pb-4">Ayo saling peduli dan membantu sesama.</h5>
        <a
          className="btn btn-daftar-sekarang px-4 py-3 rounded-pill shadow-lg"
          href="/register"
          role="button"
        >
          Daftar Sekarang
        </a>
      </section>
      {/* Peduli bersama end */}

      {/* Tim kami */}
      <section id="tim-kami" className="tim-kami" data-aos="fade-up" data-aos-duration="1300" data-aos-offset="300">
        <div className="container py-5">
          <div className="col text-center">
            <h2 className="pb-4">Tim Kami</h2>
          </div>
          <div className="row text-center mx-auto">
            <div className="col-12 col-sm-6 col-lg-3 mb-2 gap-5">
              <div className="card mx-auto pt-4 pb-3 border " style={{ width: 250 }} data-aos="fade-right"
            data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <img
                  src={vicky}
                  className="card-img-top rounded-circle d-block mx-auto img-thumbnail"
                  alt="Foto Vicky Malindo Andreas P"
                  style={{ width: 110 }}
                />
                <div className="card-body">
                  <h6 className="card-title">Vicky Malindo Andreas P</h6>
                  <p className="card-text">Universitas Gunadarma</p>
                </div>
                <div className="card-body sosmed border rounded-pill py-1 mb-3 mx-auto">
                  <a href="#" className="card-link">
                    <i className="fab fa-github" />
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                  <a href="#" className="card-link">
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                  <a href="#" className="card-link">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-2 gap-5">
              <div className="card mx-auto pt-4 pb-3 border" style={{ width: 250 }} data-aos="fade-right"
            data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <img
                  src={iqsyal}
                  className="card-img-top rounded-circle d-block mx-auto img-thumbnail"
                  alt="Foto Iqsyal Maulana"
                  style={{ width: 110 }}
                />
                <div className="card-body">
                  <h6 className="card-title">Iqsyal Maulana</h6>
                  <p className="card-text">Universitas Pancasila</p>
                </div>
                <div className="card-body sosmed border rounded-pill py-1 mb-3 mx-auto">
                  <a href="#" className="card-link">
                    <i className="fab fa-github" />
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                  <a href="#" className="card-link">
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                  <a href="#" className="card-link">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-2 gap-5">
              <div className="card mx-auto pt-4 pb-3 border" style={{ width: 250 }} data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <img
                  src={kennie}
                  className="card-img-top rounded-circle d-block mx-auto img-thumbnail"
                  alt="Foto Kennie"
                  style={{ width: 110 }}
                />
                <div className="card-body">
                  <h6 className="card-title">Kennie</h6>
                  <p className="card-text">Universitas Universal</p>
                </div>
                <div className="card-body sosmed border rounded-pill py-1 mb-3 mx-auto">
                  <a href="#" className="card-link">
                    <i className="fab fa-github" />
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                  <a href="#" className="card-link">
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                  <a href="#" className="card-link">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-2 gap-5">
              <div className="card mx-auto pt-4 pb-3 border" style={{ width: 250 }} data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <img
                  src={rendra}
                  className="card-img-top rounded-circle d-block mx-auto img-thumbnail"
                  alt="Foto Rendra Dwi Bima Sakti"
                  style={{ width: 110 }}
                />
                <div className="card-body">
                  <h6 className="card-title">Rendra Dwi Bima Sakti</h6>
                  <p className="card-text">Universitas Islam Balitar</p>
                </div>
                <div className="card-body sosmed border rounded-pill py-1 mb-3 mx-auto">
                  <a href="#" className="card-link">
                    <i className="fab fa-github" />
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                  <a href="#" className="card-link">
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                  <a href="#" className="card-link">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tim kami end */}
    </div>
  );
};

export default Main;
