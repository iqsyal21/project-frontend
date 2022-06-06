import React from "react";
import { link } from "../Axios/link";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    async function daftar(data) {
        const response = await link.post("/register", data)
        if (response) {
            alert("register berhasil, silahkan login");
            history.push("/login");
        }
    }

  return (
    <div>
      <div className="row mt-5">
        <div className="mx-auto col-5">
          <form onSubmit={handleSubmit(daftar)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                ref={register({ required: true })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Dafar
            </button>
          </form>
          <div className="mt-2 text-center">
            sudah punya akun ? <a href="/login">login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;