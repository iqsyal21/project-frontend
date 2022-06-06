/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { link } from "../Axios/link";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";

Modal.setAppElement("#root");
const MainAdmin = () => {
  if (sessionStorage.getItem("token") === "undefined") {
    return < Redirect to ="/login" />;
  }

  const [isi, setisi] = useState([]);
  const [idlaporan, setidlaporan] = useState("");
  const [mopen, setMopen] = useState(false);

  const { register, handleSubmit } = useForm();

  async function hapus(id) {
    let konfirmasi = window.confirm("lanjut hapus data ?");
    if (konfirmasi) {
      const res = await link.delete("/laporan/" + id);
      if (res) {
        alert("data berhasil dihapus, silahkan refresh halaman");
      }
    }
  }

  function showData(id) {
    console.log(id);
    setidlaporan(id);
    setMopen(true);
  }

  async function updateStatus(data) {
    const res = await link.put("/laporan/" + idlaporan, data);
    if (res) {
      alert("data berhasil diupdate, silahkan refresh halaman");
    }
    console.log(data);
    setMopen(false)
  }

  useEffect(() => {
    let ambil = true;
    async function fetchData() {
      const response = await link.get("/laporan");
      if (ambil) {
        setisi(response.data);
      }
    }

    fetchData();
    return () => {
      ambil = false;
    };
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
            background: "transparent !important",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
          },
        }}
      >
        <div className="col">
          <form onSubmit={handleSubmit(updateStatus)}>
            <div className="mb-3">
              <label htmlFor="status">Silahkan isi status tindak lanjut untuk laporan tersebut di kolom ini</label>
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
        <h2>Data Laporan</h2>
      </div>

      <div className="row">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>telepon</th>
              <th>Gambar</th>
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
                    width="150"
                    height="100"
                  />
                </td>
                <td>{val.location}</td>
                <td>{val.status}</td>
                <td>
                  <button
                    onClick={() => showData(val.id_laporan)}
                    className="btn btn-warning m-1"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => hapus(val.id_laporan)}
                    className="btn btn-danger m-1"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainAdmin;
