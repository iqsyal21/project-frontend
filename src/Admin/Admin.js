import React from 'react';
import { Redirect } from "react-router-dom";
import Nav from './Nav';
import MainAdmin from './MainAdmin';
import Footer from './Footer';

const Admin = () => {
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
            <div className='container'><MainAdmin /></div>
            <div><Footer /></div>
        </div>
    );
}

export default Admin;
