import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <Link to='/aboutus'><h2>About Us</h2></Link>
                    
                </div>
                <div className='footer-link-items'>
                    
                    <Link to='/contactus'><h2>Contact Us</h2></Link>
                   
                </div>
            </div>
            
            
        </div>

        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        TheGadgetZone <i className='fa-solid fa-mobile'></i>
                    </Link>
                </div>
                <small className='website-rights'> TheGadgetZone © 2022 </small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram'></i>
                    </Link>
                </div>
            </div>
        </section>  

    </div>
  )
}

export default Footer