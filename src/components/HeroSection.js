import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src=' /videos/video1.mp4' autoPlay loop muted />
        <h1>Welcome</h1>
        <p>The gadget zone provides all the latest devices you need</p>
        <div className='hero-btns'>
            
            
            <Link  to='/'>
                
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Get Started 
                </Button>

            </Link>
        </div>

    </div>
  )
}

export default HeroSection