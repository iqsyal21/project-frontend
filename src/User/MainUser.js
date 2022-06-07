/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { link } from "../Axios/link";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("#root");
const MainUser = () => {

  const [isi, setisi] = useState([]);
  const [detaildata, setdetaildata] = useState("");
  const [mopen, setmopen] = useState(false);

  const { register, handleSubmit } = useForm();

  console.log(sessionStorage.getItem("id_user"));
  console.log(sessionStorage.getItem("name"));

  async function simpan(data) {
    const formData = new FormData();
    formData.append("id_user", sessionStorage.getItem("id_user"))
    formData.append("name", sessionStorage.getItem("name"));
    formData.append("phone", data.phone);
    formData.append("image", data.image[0]);
    formData.append("location", data.location);

    const res = await link.post("/laporan", formData);
    if (res) {
      alert("data berhasil ditambahkan");
      window.location.reload();
    }
  }

  async function showData(id) {
    const response = await link.get("/laporan/" + id);
    setdetaildata(response.data[0]);
    console.log(detaildata);
    setmopen(true);
  }

  useEffect(() => {
    let ambil = true;
    async function fetchData() {
      const response = await link.get("/laporan/user/" + sessionStorage.getItem("id_user"));
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

  let no = 1;

  return (
    <div>
      <Modal
        isOpen={mopen}
        onRequestClose={() => setmopen(false)}
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
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <h2>Laporan Saya</h2>
          <div className="card" style={{ width: "18rem" }}>
            <img src={detaildata.image} alt={detaildata.location} className="card-img-top" />
            <div className="card-body">
              <p className="card-text">Nama : {sessionStorage.getItem("name")}</p>
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
        <h2>Data Laporan</h2>
      </div>

      <div className="col">
        <form onSubmit={handleSubmit(simpan)}>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
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
            <label htmlFor="image" className="form-label">
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
            <label htmlFor="lokasi" className="form-label">
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
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>Gambar</th>
              <th>Lokasi</th>
              <th>Status</th>
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
                    width="150"
                    height="100"
                  />
                </td>
                <td>{val.location}</td>
                <td>
                  <button
                    onClick={()  => showData(val.id_laporan)}
                    className="btn btn-primary"
                  >
                    Detail
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

export default MainUser;
