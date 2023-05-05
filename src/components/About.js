import React from 'react'
import '../css/About.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBook, faDoorOpen, faNewspaper } from '@fortawesome/free-solid-svg-icons';

function About() {
    
  return (
        <div className='About'>
          <div className='head'>
            <h2 className='heading'>OUR COLLECTION</h2>
            <p>What we bring to the table</p>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='column1'>
                <h3>BOOKS</h3>
                <FontAwesomeIcon className='books' icon={faBook}/>
                <p>We offer a wide range of book choices<br/> to quench your thirst for knowledge</p>
              </div >
              <div className='column2'>
                <h3>SPACE</h3>
                <FontAwesomeIcon className='space' icon={faDoorOpen}/>
                <p>We give you access to a spaces<br/> to get you from the noisy mess of your home</p>
              </div>
              <div className='column3'>
                <h3>PERIODICALS</h3>
                <FontAwesomeIcon className='periodicals'icon={faNewspaper}/>
                <p>We give you access to intruiging<br/>dramas from periodicals</p>
              </div>
            </div>
            <div className='content'>
              <div className='photo'>
                <img src='https://plus.unsplash.com/premium_photo-1681681061635-a64755f982f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjBzdHVkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='library'/> 
              </div>
              <div className='description'>
                <span>The MindBenders Library is Yale University’s principal source of literary archives, early manuscripts and rare books, and it’s used by students and researchers around the world. Designed by MindBenders Shareholders with the goal of filtering daylight to protect the books, and effective services to there clients the building was completed in 1963 and constructed out of marble and granite sourced from Vermont. </span>
                {/* <p>With the MindBenders we enable you to acquire for yourself books, spaces and periodicals.</p>
                <p>To book for any item you require, click on the book now button to start you on your journey of mindbending</p> */}
              </div>
              </div>
            <div className='content2'>
              <div>
                <p><span>MindBenders library is home to numerous students and acts as a home for cognitive advancements in a peaceful and serene environment </span></p>
              </div>
              <div className='photo'>
                <img src='https://images.unsplash.com/photo-1635862624756-2f64dd64fd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpYnJhcmllcyUyMHNwYWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60' alt='library shots'/>
              </div>
            </div>
            <div className='content3'>
              <div className='photo'>
                <img src='https://images.unsplash.com/photo-1568031806078-63e5b065bc95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpYnJhcnklMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='library shots'/>
              </div>
              <div>
                <p><span>Browse through the mountload of book resources offered by the MindBenders Library with the selection of numerous genres at your fingertips and a whole lot of knowledge to unpack</span></p>
              </div>
            </div>
          </div>
            <button className='button'><a href="/services">BOOK NOW</a></button>
          </div>
  )
}

export default About