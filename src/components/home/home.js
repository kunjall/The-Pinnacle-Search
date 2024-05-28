import React from 'react';
import '../../assets/styles/home.css';
import Cards from '../home/cards'
import Locations from '../home/locations'
import NearMeIcon from '@mui/icons-material/NearMe';
import BuildIcon from '@mui/icons-material/Build';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <p className ="Name"><b>The Pinnacle Search</b></p>
        <h1>We Believe.</h1>
        <h1>We Deliver.</h1>
      </header>
      {/* <div className="home-content">
        <p>Content goes here...</p>
      </div> */}
      <div className='cards'>
        <p className='products'><BuildIcon style={{ color: 'black' }} />   Our Products</p>
      <Cards /></div>
      <div className='locations'>
      <p className='location'><NearMeIcon style={{ color: 'black', alignItems: 'center' }} />   Our Presence</p>
      <Locations />
      </div>
    </div>
  );
};

export default Home;
