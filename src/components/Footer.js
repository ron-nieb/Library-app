import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import '../css/Footer.css'

function Footer() {
  return (
    <div>
      <h2>--THE MIND BENDERS LIBRARY EXPERIENCE--</h2>
      <br/>
      <br/>
      <h1>Contact Us</h1>
    <div className='contact-map'>
      <div id="contact-image">
      <img  src='https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
      </div>
    <div id='contact-p'>
      <i><span>Our opening hours may vary based on the events being held on a <br/><br/>  particular day. However, our administrative office opens between <br/> <br/> 800Hrs to 1700Hrs EAT (UTC+3). See the details below on how to <br/> <br/> reach us based on your queries.</span></i>
    </div>
    </div>
    <footer className='footer'>
        <div className='row'>
            <div className='column'>
               <FontAwesomeIcon className='book'icon={faBook}/>
               <p>Let us Give you what you deserve</p>
            </div>
            <div className='column'>
              <h3>Contacts <div className='underline'><span></span></div></h3>
              <p>Nairobi</p>
              <p>Ngong Road</p>
              <p className='email-id'>MindBenders@gmail.com</p>
              <p>+254720895727</p>
            </div>
            <div className='column'>
              <h3>Links <div className='underline'><span></span></div></h3>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
            <div className='column'>
              <div className='social-icons'>
                <h3>Socials <div className='underline'><span></span></div></h3>
                <FontAwesomeIcon className='icon' icon={faTwitter} />
                <FontAwesomeIcon className='icon' icon={faInstagram}/>
                <FontAwesomeIcon className='icon' icon={faFacebookF}/>
                <FontAwesomeIcon className='icon' icon={faPinterest}/>
                <FontAwesomeIcon className='icon' icon={faWhatsapp}/>
              </div>
            </div>
        </div>
      <hr></hr>
      <p className='copyright'>MindBenders © 2023 - All rights reserved</p>
    </footer>
    </div>
  )
}

export default Footer