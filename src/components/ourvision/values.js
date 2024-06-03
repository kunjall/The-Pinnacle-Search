import React from 'react';
import '../../assets/styles/vision.css';
import '../ourvision/valuecards'
import ValuesCard from '../ourvision/valuecards';
import Footer from '../Footer/footer'


const Vision = () => {

  return (
    <div className="vision">
      <header className="vision-header">
        <h1>What do we value?</h1>
      </header>
      <div className="container">
        <ValuesCard />
      </div>
      <Footer />
    </div>
  );
};

export default Vision;
