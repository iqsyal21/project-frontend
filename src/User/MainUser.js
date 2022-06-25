/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { link } from '../Axios/link';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');
const MainUser = () => {
  const [isi, setisi] = useState([]);
  const [detaildata, setdetaildata] = useState('');
  const [mopen, setmopen] = useState(false);
  const [userLocation, setUserLocation] = useState('');

  const { register, handleSubmit } = useForm();

  // console.log(sessionStorage.getItem('id_user'));
  // console.log(sessionStorage.getItem('name'));

  const geoUserLocation = async () => {
    const success = async (position) => {
      const latitude = await position.coords.latitude;
      const longitude = await position.coords.longitude;

      const userLatLong = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;

      setUserLocation(userLatLong);
    };

    const error = async () => {
      await alert('Gagal untuk mendapatkan lokasi anda');
    };

    if (await !navigator.geolocation) {
      await alert('Geolokasi tidak kompatibel di peramban Anda');
    } else {
      await navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const triggerAdmin = () => {};

  async function simpan(data) {
    const formData = await new FormData();
    await formData.append('id_user', sessionStorage.getItem('id_user'));
    await formData.append('name', sessionStorage.getItem('name'));
    await formData.append('phone', data.phone);
    await formData.append('image', data.image[0]);
    await formData.append('location', userLocation);

    console.log(formData);

    const res = await link.post('/laporan', formData);
    if (res) {
      await alert('data berhasil ditambahkan');
      window.location.reload();
    }
  }

  async function showData(id) {
    const response = await link.get('/laporan/' + id);
    setdetaildata(response.data[0]);
    // console.log(detaildata);
    setmopen(true);
  }

  const fetchData = () => {
    link
      .get('/laporan/user/' + sessionStorage.getItem('id_user'))
      .then((response) => {
        setisi(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(isi);

  let no = 1;

  return (
    <div>
      <Modal
        isOpen={mopen}
        onRequestClose={() => setmopen(false)}
        style={{
          overlay: {
            background: 'transparent !important',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <h2>Detail Laporan</h2>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={detaildata.image}
            alt={detaildata.location}
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text">
              Pelapor : {sessionStorage.getItem('name')}
            </p>
            <p className="card-text">Telepon : {detaildata.phone}</p>
            <p className="card-text">Lokasi : {detaildata.location}</p>
            <p className="card-text">Status : {detaildata.status}</p>
          </div>
        </div>
        <button onClick={() => setmopen(false)} className="btn btn-success m-3">
          Oke
        </button>
      </Modal>

      <div className="row">
        <div className="col text-center">
          <h2 className="pb-4 pb-lg-5">Laporkan Kecelakaan</h2>
        </div>
      </div>

      <div className="col-sm-8">
        <form onSubmit={handleSubmit(simpan)}>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-bold">
              Telepon
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Telepon"
              ref={register({ required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label fw-bold">
              Gambar
            </label>
            <input
              type="file"
              className="form-control"
              name="image"
              ref={register({ required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lokasi" className="form-label fw-bold d-block">
              Lokasi
            </label>
            <button
              style={{
                border: '1px solid #000',
                padding: '5px 8px',
                borderRadius: '7px',
              }}
              onClick={() => geoUserLocation()}
            >
              Lacak Lokasi
            </button>
          </div>
          <div className="mb-3">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>

      <div className="row">
        <div className="col text-center">
          <h2 className="pb-4 pb-lg-5">List Laporan</h2>
        </div>
      </div>

      <div className="container container-sm-fluid">
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>No</th>
                <th>Foto</th>
                <th>Lokasi</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {isi.map((val, index) => (
                <tr key={index}>
                  <td>{no++}</td>
                  <td>
                    <img
                      src={val.image}
                      alt={val.location}
                      width="200"
                      height="150"
                      className="img-laporan"
                    />
                  </td>
                  <td>{val.location}</td>
                  <td></td>
                  <td>
                    <button
                      onClick={() => showData(val.id_laporan)}
                      className="btn btn-outline-info"
                    >
                      {' '}
                      <FontAwesomeIcon icon={faEye} className="mr-2" />
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainUser;
