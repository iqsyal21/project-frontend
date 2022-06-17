import React from 'react';
import logter from '../images/logter.JPG';
import { link } from '../Axios/link';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  async function login(data) {
    const response = await link.post('/login', data);
    let dataResponse = response.data.data;

    sessionStorage.setItem('token', dataResponse.api_token);
    sessionStorage.setItem('level', dataResponse.level);
    sessionStorage.setItem('name', dataResponse.name);
    sessionStorage.setItem('phone', dataResponse.phone);
    sessionStorage.setItem('id_user', dataResponse.id);

    if (getToken() !== undefined) {
      if (getLevel() === 'user') {
        history.push('/user');
        window.location.reload();
      } else {
        history.push('/admin');
        window.location.reload();
      }
    } else {
      alert('login gagal, silahkan ulangi kembali');
    }
  }

  const getToken = () => sessionStorage.getItem('token');
  const getLevel = () => sessionStorage.getItem('level');

  return (
    <div>
      <div className="container tentang-kami ">
        <div className="row">
          <div className="col text-center">
            <h2 className="pb-4 pb-lg-5">Login</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <img
            className="d-block mx-auto py-2 w-50"
            src={logter}
            alt="Gambar orang dan mobile"
            height="320px"
          />
          <div className="col-lg-6 col-md-12 text-lg-start login-register">
            <form onSubmit={handleSubmit(login)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
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
            <div className="mt-4 text-center">
              <a href="/home">kembali ke menu utama</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
