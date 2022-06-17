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

  const { register, handleSubmit } = useForm();

  async function simpan(data) {
    const formData = new FormData();
    formData.append('id_user', sessionStorage.getItem('id_user'));
    formData.append('name', sessionStorage.getItem('name'));
    formData.append('phone', sessionStorage.getItem('phone'));
    formData.append('image', data.image[0]);
    formData.append('description', data.description);
    formData.append('location', data.location);

    const res = await link.post('/laporan', formData);
    if (res) {
      alert('data berhasil ditambahkan');
      window.location.reload();
    }
  }

  async function showData(id) {
    const response = await link.get('/laporan/' + id);
    setdetaildata(response.data[0]);
    setmopen(true);
  }

  useEffect(() => {
    let ambil = true;
    async function fetchData() {
      const response = await link.get(
        '/laporan/user/' + sessionStorage.getItem('id_user')
      );
      if (ambil) {
        setisi(response.data);
      }
    }

    fetchData();
    return () => {
      ambil = false;
    };
  }, []);

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
            <p className="card-text">
              Telepon : {sessionStorage.getItem('phone')}
            </p>
            <p className="card-text">Keterangan : {detaildata.description}</p>
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
            <label htmlFor="image" className="form-label fw-bold">
              Gambar
            </label>
            <input
              type="file"
              className="form-control"
              name="image"
              ref={register({ required: true })}
            />
          </div><div className="mb-3">
            <label htmlFor="description" className="form-label fw-bold">
              Keterangan
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="keterangan"
              ref={register({ required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lokasi" className="form-label fw-bold">
              Lokasi
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              placeholder="lokasi"
              ref={register({ required: true })}
            />
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
