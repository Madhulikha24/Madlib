import React from 'react';
import '../../stylesheets/nav.scss';

const Footer = (props) => {
  return (
    <div className='footer-container'>
      <div className='dev-info-container'>
     {/* Madhu */}
        <div className='Madhu'>
          <a className='portfolio-site' href="https://github.com/madhulikha24" target={'_blank'} rel="noreferrer">Madhu</a>
          <div className='dev-links'>
            <div className='github'>
              <a href="https://github.com/madhulikha24" target={'_blank'} rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512">
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"/>
                </svg>
              </a>
            </div>
            <div className='linkedin'>
              <a href="https://www.linkedin.com/in/madhulikha24" target={'_blank'} rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

        
  )
}
export default Footer;