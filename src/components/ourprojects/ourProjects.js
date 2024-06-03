import React from 'react';
import '../../assets/styles/projects.css';
import List from '../ourprojects/executed'
import Authority from '../ourprojects/authorities'
import Footer from '../Footer/footer'

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
        <p className='month'> Projects executed for customers in below authorities</p>
        </div>      
        <Authority />
        <Footer />
    </div>
  );
};

export default Vision;