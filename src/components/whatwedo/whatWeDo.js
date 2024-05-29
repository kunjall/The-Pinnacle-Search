import React from 'react';
import '../../assets/styles/projects.css';
import List from '../whatwedo/capabilities'
// import Manpower from '../whatwedo/manpower'
import Machinery from '../whatwedo/machinery'
import Manpower from '../../assets/images/manpower.png'

const Vision = () => {
  return (
    <div className="project">
      <header className="project-header">
        <h1>Comprehensive Solutions for Your Needs</h1>
      </header>
      <div className="months">
        <p className='month'> Execution Capabilities</p>
      </div>
      <List />
      <div className="authorities">
        <p className='authority'> Manpower onboard</p>
      </div>      
      {/* <Manpower /> */}
      <img src={Manpower} alt='Indus Networks' style={{ width: '80%', height: 'auto', display: 'block', margin: 'auto' }} />
      <div className="machines">
        <p className='machine'> Machinery & Tools</p>
      </div>      
      <Machinery />
    </div>
  );
};

export default Vision;
