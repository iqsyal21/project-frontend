import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="footer pt-5 pb-4">
        <div className="container">
          <div className="row text-cente">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
              <h6 className="fw-bold">SAPDACIL</h6>
              <p>Satuan Pelaporan Darurat Cililin</p>
              <p>
                Jl. Cinta Karya, Cililin, <br /> Kabupaten Bandung Barat, <br />
                Jawa Barat 40562
              </p>
            </div>
            <div className="follow-us col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="mb-3 fw-bold">Follow Us</h6>
              <div>
                <a href="#" className="card-link">
                  <i className="fab fa-facebook" />
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="card-link">
                  <i className="fab fa-github" />
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="card-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <div className="footer-nav col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="mb-3 fw-bold">Navigasi</h6>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#tentang-kami">Tentang Kami</a>
              </li>
              <li>
                <a href="#tim-kami">Tim Kami</a>
              </li>
            </div>
          </div>
          <div className="copyright col text-center pt-3">
            <hr />
            <p>
              Copyrights © 2022 by <span className="fw-bold">SAPDACIL</span>
            </p>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </div>
  );
};

export default Footer;
