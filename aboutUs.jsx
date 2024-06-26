import React from 'react';
import { Navbar } from './navbar';
import './CSS/aboutUs.css';
import { Footer } from './footer';
import welcomeImage from  './Images/aboutUs.jpg';
import first from './Images/First Man.jpg';
import second from './Images/Second Man.jpg';
import third from './Images/Third Man.jpg';
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <main className='mainAbout'>
      <section className='aboutUs'>
        <Navbar></Navbar>
        <div className='text'>
          <h1>About Us</h1>
          <p>Apply for our business loan in minutes, without painful</p>
        </div>
        </section>

        <section className='welcome'>
          <div className='welcomeImage'>
            <img src={welcomeImage} alt="" />
          </div>

          <div className='welcomeText'>
            <h1>Welcome To DWMPCS.</h1>
            <h2>However, there is much more to branding than</h2>
            <span>
            Where a powerful web presence has become a vital ingredient of your branding
            </span>
            <p>
              The DWMCS is a duly registered Association with distinguished characteristics and modus operandi for the benefit of her members and interested Nigerian workers. 
            </p>
            <button onClick={() => {
              navigate('/contactUs')
            }}>Contact Us</button>
          </div>
        </section>

        <section className='statements'>
          <div id='vission'>
            <span>Our Vission</span>
            <p>To be the leading provider of innovative loan solutions, renowned for our commitment to customer success and community development, ensuring financial inclusion for all.
            </p>
          </div>

          <div id='mission'>
            <span>Our Mission</span>
            <p>Empowering individuals and small businesses through accessible and affordable loan services, fostering financial growth and stability.
            </p>
          </div>

          <div id='value'>
            <span>Our Value</span>
            <p>We uphold integrity, prioritize customer satisfaction, embrace innovation, support community development, and practice responsible lending
            </p>
          </div>
        </section>
      
        <section id='emergency'>
          <span>Apply for a Loan  for your startup or financial emergency</span>
          <button onClick={() => {
            navigate('/applyNow')
          }}>Apply Now</button>
        </section>

        <p>Our Loan Section Team Members </p>
        <h1>Take a look to our professional team members.</h1>
        <section className="members">
         
          <div>
            <img src={first} alt={"Manager"} />
          </div>

          <div>
            <img src={second} alt={"CFO"} />
          </div>

          <div>
            <img src={third} alt={"COO"} />
          </div>
        </section>

      <Footer></Footer>
    </main>
  )
}
