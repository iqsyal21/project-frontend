import React from "react";
import { link } from "../Axios/link";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    async function login(data) {
        const response = await link.post("/login", data)
        let dataResponse = response.data.data;

        let token = dataResponse.api_token;
        let level = dataResponse.level;
        
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("level", level);

        if (getToken() !== "undefined") {
          if (getLevel() === "user") {
            history.push("/user");
          } else {
            history.push("/admin");
          }
        } else {
          alert("login gagal, silahkan refresh halaman dan ulangi kembali");
        }
    }

    const getToken = () => (sessionStorage.getItem("token"));
    const getLevel = () => (sessionStorage.getItem("level"));

  return (
    <div>
      <div className="row mt-5">
        <div className="mx-auto col-5">
          <form onSubmit={handleSubmit(login)}>
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
              Login
            </button>
          </form>
          <div className="mt-2 text-center">
            belum punya akun ? <a href="/register">daftar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
