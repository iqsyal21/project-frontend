import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Navigation from './Nav';

const Front = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Front;
