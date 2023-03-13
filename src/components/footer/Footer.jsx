import React from 'react';

const Footer = () => {
  return (
    <div className='container-fluid bg-dark text-light'>
      <div className='row' style={{height:'100px', marginTop: '3rem'}}>
        <div className='col-xs-12 col-lg-6 d-flex justify-content-center align-items-center'>
          <h1>RollingCode</h1>
        </div>
        <div className='col-xs-12 col-lg-6 d-flex justify-content-center align-items-center'>
          <h1>Software Store</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer;
