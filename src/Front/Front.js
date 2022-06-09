import React from 'react';
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Front = () => {
    return (
        <div>
            <div><Nav /></div>
            <div><Header /></div>
            <div><Main /></div>
            <div><Footer /></div>
        </div>

    );
}

export default Front;
