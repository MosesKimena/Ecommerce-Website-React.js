import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom';
import Button from '../Button';

class AboutUs extends React.Component {

    render() {
        return(
            <div class="section">
                <nav className='navbar'>
                <a href="/" className='home'>Home</a>
                </nav>
            <div class="container">
                <div class="content-section">
                    <div class="title">
                        <h1>About Us</h1>
                    </div>
                    <div class="content">
                        <h3>Welcome to the gadget zone, your number one source for all things electronics. We're dedicated to providing you the very best of electronics, with an emphasis on phones, computers, and watches.


Founded in 2001 by Moses Kimena, the gadget zone has come a long way from its beginnings in Lusaka Zambia. When Moses first started out, his passion for electronic devices drove them to start their own business.


We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.


Sincerely,

Moses Kimena.</h3>
                        <div class="button">
                            <a href="/contactus">Contact Us</a>
                        </div>
                    </div>
                    <div class="social">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="image-section">
                    <img src='images/bg.jpg'></img>
                    
                </div>
            </div>
        </div>
            
            
        )
        
    }
}


export default AboutUs;