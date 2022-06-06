import React from 'react';
import Nav from './Nav';
import MainAdmin from './MainAdmin';
import Footer from './Footer';

const Admin = () => {
    return (
        <div>
            <div><Nav /></div>
            <div className='container'><MainAdmin /></div>
            <div><Footer /></div>
        </div>
    );
}

export default Admin;
