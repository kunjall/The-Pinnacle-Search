import React from 'react';
import '../../assets/styles/home.css';
import Cards from '../home/cards'
import Locations from '../home/locations'
import Story from '../home/story'
import Compliance from '../home/compliances'
import NearMeIcon from '@mui/icons-material/NearMe';
import BuildIcon from '@mui/icons-material/Build';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PeopleIcon from '@mui/icons-material/People';
import Airtel from '../../assets/images/airtel.png'
import Jio from '../../assets/images/jio.png'
import Indus from '../../assets/images/indus.png'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

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
        <p className='products'><BuildIcon style={{ color: 'black' }} />   Our Services</p>
      <Cards /></div>
      <div className='locations'>
      <p className='location'><NearMeIcon style={{ color: 'black', alignItems: 'center' }} />   Our Presence</p>
      <Locations />
      </div>
      <div className='capability'>
      <p> *We have the capabilities to expand PAN India</p>
      </div>
      <div className='story'>
        <p className='products'><AutoStoriesIcon style={{ color: 'black' }} />   Our Story</p>
      <Story /></div>
      <div className='client'>
        <p className='products'><PeopleIcon style={{ color: 'black' }} />   Our Clients</p>
        <div className='client-images'>
        <img src={Airtel} alt='airtel'></img>
        <img src={Jio} alt='Jio'></img>
        <img src={Indus} alt='Indus Networks'></img>
      </div>
      </div>
      <div className='compliance'>
        <p className='compliances'><AssuredWorkloadIcon style={{ color: 'black' }} /> Government Compliance</p>
      <Compliance /></div>
    </div>
  );
};

export default Home;
