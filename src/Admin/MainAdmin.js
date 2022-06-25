/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { link } from '../Axios/link';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');
const MainAdmin = () => {
  const [isi, setisi] = useState([]);
  const [idlaporan, setidlaporan] = useState('');
  const [mopen, setMopen] = useState(false);

  const { register, handleSubmit } = useForm();

  async function hapus(id) {
    let konfirmasi = window.confirm('lanjut hapus data ?');
    if (konfirmasi) {
      const res = await link.delete('/laporan/' + id);
      if (res) {
        alert('data berhasil dihapus');
        fetchData();
      }
    }
  }

  function showData(id) {
    console.log(id);
    setidlaporan(id);
    setMopen(true);
  }

  async function updateStatus(data) {
    const res = await link.put('/laporan/' + idlaporan, data);
    if (res) {
      alert('data berhasil diupdate');
      window.location.reload();
    }
    console.log(data);
    setMopen(false);
  }

  const fetchData = () => {
    link.get('/laporan').then((response) => {
      setisi(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(isi);
  let nomor = 1;

  return (
    <div>
      <Modal
        isOpen={mopen}
        onRequestClose={() => setMopen(false)}
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
            width: '70%',
          },
        }}
      >
        <div className="col">
          <form onSubmit={handleSubmit(updateStatus)}>
            <div className="mb-3">
              <label htmlFor="status">
                Silahkan isi status tindak lanjut untuk laporan tersebut di
                kolom ini
              </label>
              <input
                type="text"
                className="form-control"
                name="status"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                type="submit"
                className="btn btn-primary m-1"
                name="submit"
                value="Update"
              />
              <input
                type="submit"
                className="btn btn-danger m-1"
                name="batal"
                value="Batal"
                onClick={() => setMopen(false)}
              />
            </div>
          </form>
        </div>
      </Modal>

      <div className="row">
        <div className="col text-center">
          <h2 className="pb-4 pb-lg-5 font-weight-bolder">Laporan User</h2>
        </div>
      </div>

      <div className="col-md-12 mb-5">
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Telepon</th>
                <th>Foto</th>
                <th>Lokasi</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {isi.map((val, index) => (
                <tr key={index}>
                  <td>{nomor++}</td>
                  <td>{val.name}</td>
                  <td>{val.phone}</td>
                  <td>
                    <img
                      src={val.image}
                      alt={val.location}
                      width="200"
                      height="150"
                      className="img-laporan"
                    />
                  </td>
                  <td>
                    <a
                      href={val.location}
                      target="_blank"
                      rel="noreferrer"
                      style={{ padding: '5px 8px' }}
                    >
                      Lihat Lokasi
                    </a>
                  </td>
                  <td>{val.status}</td>
                  <td className="d-flex">
                    <button
                      onClick={() => showData(val.id_laporan)}
                      className="btn btn-success m-1"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button
                      onClick={() => hapus(val.id_laporan)}
                      className="btn btn-danger m-1"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
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

export default MainAdmin;
