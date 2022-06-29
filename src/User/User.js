import React from "react";
import MainUser from "./MainUser";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";

const User = () => {

  if (
    (sessionStorage.getItem("token") === undefined) ||
    (sessionStorage.getItem("token") === null)
  ) {
    console.log(sessionStorage.getItem("token"))
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div><Nav /></div>
      <div><Header /></div>
      <div className="container"><MainUser /></div>
      <div><Footer /></div>
    </div>
  );
};

export default User;
