import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content'

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      
      <Content />
      
      <Footer />
    </div>
  );
}

export default HomePage;