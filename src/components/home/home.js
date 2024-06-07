import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../../assets/styles/home.css';
import Cards from '../home/cards';
import Locations from '../home/locations';
import Story from '../home/story';
// import Compliance from '../home/compliances';
import Footer from '../Footer/footer';
import NearMeIcon from '@mui/icons-material/NearMe';
import BuildIcon from '@mui/icons-material/Build';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PeopleIcon from '@mui/icons-material/People';
import Airtel from '../../assets/images/airtel.png';
import Jio from '../../assets/images/jio.png';
import Indus from '../../assets/images/indus.png';
import VI from '../../assets/images/Vodafone.png';
import AIIMS from '../../assets/images/AIIMS.png';
import PGIMS from '../../assets/images/PGIMS.png';
import HMC from '../../assets/images/hmc.jpeg';
import ODISHA from '../../assets/images/odisha.png';

// import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

const Home = () => {
  const [ text ] = useTypewriter({
    words: ['Believe.', 'Deliver.'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="home">
      <header className="home-header">
        <p className="Name" style={{color: '#0A1A29'}}><b>The Pinnacle Search</b></p>
        <h1 style={{ color: '#ec7c30' }}>
          We {' '}
          <span style={{ fontWeight: 'bold', color: '#0A1A29' }}>
            {text}
          </span>
          <span style={{ color: '#ec7c30' }}>
            <Cursor cursorStyle='|' />
          </span>
        </h1>
      </header>
      <div className='cards' >
        <p className='products'>
          <BuildIcon style={{ color: 'black' }} /> Our Services
        </p>
        <Cards />
      </div>
      <div className='locations'>
        <p className='location'>
          <NearMeIcon style={{ color: 'black', alignItems: 'center' }} /> Our Presence
        </p>
        <Locations />
      </div>
      <div className='capability'>
        <p> *We have the capabilities to expand PAN India</p>
      </div>
      <div className='story'>
        <p className='products'>
          <AutoStoriesIcon style={{ color: 'black' }} /> Our Story
        </p>
        <Story />
      </div>
      <div className='client'>
        <p className='products'>
          <PeopleIcon style={{ color: 'black' }} /> Our Clients
        </p>
        <div className='client-images'>
          <img src={Airtel} alt='Airtel' />
          <img src={Jio} alt='Jio' />
          <img src={Indus} alt='Indus Networks' />
          <img src={VI} alt='Vodafone Idea' />
          <img src={AIIMS} alt='AIIMS' />
          <img src={PGIMS} alt='Vodafone Idea' />
          <img src={HMC} alt='Vodafone Idea' />
          <img src={ODISHA} alt='Vodafone Idea' />

        </div>
      </div>
      {/* <div className='compliance'>
        <p className='compliances'>
          <AssuredWorkloadIcon style={{ color: 'black' }} /> Government Compliance
        </p>
        <Compliance />
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
