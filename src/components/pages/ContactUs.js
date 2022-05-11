import React from 'react'
import './ContactUs.css'

class ContactUs extends React.Component {

    render() {
        return(
            <div class="section">
                <nav className='navbar'>
                <a href="/" className='home'>Home</a>
                </nav>
            <div class="container">
                <div class="content-section">
                    <div class="title">
                        <h1>Contact Us</h1>
                    </div>
                    <div class="content">
                        <h2>
                            Email : mokimena@gmail.com
                        </h2>
                       
                        <h2>
                            Phone Number : 13207513720
                        </h2>
                    </div>
                    <div class="social">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="image-section">
                    <img src='images/phone.png'></img>
                    
                </div>
            </div>
        </div>
            
            
        )
        
    
        
    }
}


export default ContactUs;