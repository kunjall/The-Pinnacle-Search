import React from 'react';
import '../../assets/styles/projects.css';
import List from '../ourprojects/executed'
import Authority from '../ourprojects/authorities'

const Vision = () => {
  return (
    <div className="project">
      <header className="project-header">
        <h1>Delivering Excellence to our Valued Customers</h1>
        
      </header>
      <div className="months"> 
        <p className='month'> Projects executed in the last 6 months</p>
        </div>
      <List />
      <div className="authorities">
        <p className='month'> Projects executed for the following authorities</p>
        </div>      
        <Authority />
    </div>
  );
};

export default Vision;